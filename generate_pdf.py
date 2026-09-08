import json
import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak, KeepTogether, HRFlowable
)
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.pdfgen import canvas

class NumberedCanvas(canvas.Canvas):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self._saved_page_states = []

    def showPage(self):
        self._saved_page_states.append(dict(self.__dict__))
        self._startPage()

    def save(self):
        num_pages = len(self._saved_page_states)
        for state in self._saved_page_states:
            self.__dict__.update(state)
            self.draw_page_decorations(num_pages)
            super().showPage()
        super().save()

    def draw_page_decorations(self, total_pages):
        self.saveState()
        self.setFont("Helvetica", 8)
        self.setFillColor(colors.HexColor("#64748b"))
        
        # Header on later pages
        if self._pageNumber > 1:
            self.drawString(36, 762, "Brahim BIDI — Senior JavaScript & Deno Architect | AI & Automation Systems")
            self.setStrokeColor(colors.HexColor("#cbd5e1"))
            self.setLineWidth(0.5)
            self.line(36, 756, 576, 756)
        
        # Footer
        self.setStrokeColor(colors.HexColor("#cbd5e1"))
        self.setLineWidth(0.5)
        self.line(36, 30, 576, 30)
        
        self.drawString(36, 20, "Resume & Portfolio: https://brah.im")
        page_str = f"Page {self._pageNumber} of {total_pages}"
        self.drawRightString(576, 20, page_str)
        self.restoreState()

def build_pdf():
    json_path = os.path.join(os.path.dirname(__file__), 'db', 'cv.json')
    with open(json_path, 'r', encoding='utf-8') as f:
        cv = json.load(f)

    pdf_filename = os.path.join(os.path.dirname(__file__), 'public', 'cv-ibrahim-bidi.pdf')
    
    doc = SimpleDocTemplate(
        pdf_filename,
        pagesize=letter,
        leftMargin=36,
        rightMargin=36,
        topMargin=36,
        bottomMargin=38
    )

    PRIMARY_COLOR = colors.HexColor("#0f172a") # dark slate
    ACCENT_GOLD = colors.HexColor("#b45309")   # warm amber / gold
    LINE_GOLD = colors.HexColor("#f59e0b")     # amber line
    TEXT_MUTED = colors.HexColor("#475569")    # slate 600
    TEXT_BODY = colors.HexColor("#1e293b")     # slate 800
    LINK_COLOR = colors.HexColor("#1d4ed8")    # readable blue

    name_style = ParagraphStyle(
        'HeaderName',
        fontName='Helvetica-Bold',
        fontSize=21,
        leading=23,
        textColor=PRIMARY_COLOR,
        spaceAfter=3
    )

    subname_style = ParagraphStyle(
        'HeaderSubName',
        fontName='Helvetica-Bold',
        fontSize=10.5,
        leading=13,
        textColor=ACCENT_GOLD,
        spaceAfter=5
    )

    contact_style = ParagraphStyle(
        'HeaderContact',
        fontName='Helvetica',
        fontSize=8.2,
        leading=12,
        textColor=TEXT_MUTED,
        spaceAfter=6
    )

    section_heading_style = ParagraphStyle(
        'SectionHeading',
        fontName='Helvetica-Bold',
        fontSize=10,
        leading=13,
        textColor=PRIMARY_COLOR,
        spaceBefore=7,
        spaceAfter=3
    )

    body_style = ParagraphStyle(
        'BodyDark',
        fontName='Helvetica',
        fontSize=8.3,
        leading=11.3,
        textColor=TEXT_BODY,
        spaceAfter=3.5
    )

    skill_category_style = ParagraphStyle(
        'SkillCategory',
        fontName='Helvetica-Bold',
        fontSize=8.3,
        leading=11.3,
        textColor=PRIMARY_COLOR
    )

    skill_items_style = ParagraphStyle(
        'SkillItems',
        fontName='Helvetica',
        fontSize=8.2,
        leading=11.2,
        textColor=TEXT_BODY
    )

    item_title_style = ParagraphStyle(
        'ItemTitle',
        fontName='Helvetica-Bold',
        fontSize=8.8,
        leading=11.8,
        textColor=PRIMARY_COLOR,
        spaceBefore=4,
        spaceAfter=1.5
    )

    bullet_style = ParagraphStyle(
        'BulletText',
        fontName='Helvetica',
        fontSize=8.1,
        leading=11.0,
        textColor=TEXT_BODY,
        leftIndent=11,
        firstLineIndent=-7,
        spaceAfter=2
    )

    story = []

    # 1. Header
    story.append(Paragraph(cv.get("name", "Brahim BIDI"), name_style))
    story.append(Paragraph(cv.get("subName", ""), subname_style))

    # Clean Contacts Line (no mobile, clean labels)
    c_line1 = (
        f'<b>Email:</b> <a href="mailto:{cv.get("mail", "")}"><font color="{LINK_COLOR.hexval()}">{cv.get("mail", "")}</font></a>'
        f' &nbsp;&nbsp;|&nbsp;&nbsp; <b>Portfolio:</b> <a href="https://brah.im"><font color="{LINK_COLOR.hexval()}">brah.im</font></a>'
        f' &nbsp;&nbsp;|&nbsp;&nbsp; <b>GitHub:</b> <a href="https://github.com/Zizwar/"><font color="{LINK_COLOR.hexval()}">github.com/Zizwar</font></a>'
        f' &nbsp;&nbsp;|&nbsp;&nbsp; <b>LinkedIn:</b> <a href="https://www.linkedin.com/in/ibrahim-bidi-07a7b620"><font color="{LINK_COLOR.hexval()}">in/ibrahim-bidi</font></a>'
    )
    c_line2 = (
        f'<b>Google Play:</b> <a href="https://play.google.com/store/apps/dev?id=6847416112280855050"><font color="{LINK_COLOR.hexval()}">Play Store Dev Profile</font></a>'
        f' &nbsp;&nbsp;|&nbsp;&nbsp; <b>Facebook:</b> <a href="https://www.facebook.com/groups/javascript.programming"><font color="{LINK_COLOR.hexval()}">groups/javascript.programming</font></a>'
    )
    story.append(Paragraph(f"{c_line1}<br/>{c_line2}", contact_style))
    story.append(HRFlowable(width="100%", thickness=1.2, color=LINE_GOLD, spaceBefore=0, spaceAfter=5))

    # 2. Executive Summary
    about = cv.get("aboutMe", [])
    if len(about) > 1:
        story.append(Paragraph("EXECUTIVE SUMMARY", section_heading_style))
        for para in about[1].split("\n\n"):
            para_clean = para.strip().replace("\n", " ")
            if para_clean:
                story.append(Paragraph(para_clean, body_style))
        story.append(Spacer(1, 3))

    # 3. Core Technical Stack (Skills without percentages)
    skills = cv.get("skills", [])
    if skills:
        story.append(Paragraph("CORE TECHNICAL STACK", section_heading_style))
        skill_rows = []
        for s_group in skills:
            cat_name = s_group.get("name", "")
            item_names = [it.get("name", "") for it in s_group.get("skill", []) if it.get("name")]
            skill_text = ", ".join(item_names)
            p_cat = Paragraph(f"• <b>{cat_name}:</b>", skill_category_style)
            p_items = Paragraph(skill_text, skill_items_style)
            skill_rows.append([p_cat, p_items])

        t_skills = Table(skill_rows, colWidths=[155, 385])
        t_skills.setStyle(TableStyle([
            ('VALIGN', (0,0), (-1,-1), 'TOP'),
            ('LEFTPADDING', (0,0), (-1,-1), 0),
            ('RIGHTPADDING', (0,0), (-1,-1), 0),
            ('TOPPADDING', (0,0), (-1,-1), 1.2),
            ('BOTTOMPADDING', (0,0), (-1,-1), 1.2),
        ]))
        story.append(t_skills)
        story.append(Spacer(1, 4))

    # 4. Featured Production Projects & Platforms
    works = cv.get("works", [])
    if works:
        work_group = works[0]
        title = work_group.get("name", "Featured Production Projects & Platforms").upper()
        story.append(Paragraph(title, section_heading_style))

        for proj in work_group.get("items", []):
            proj_name = proj.get("name", "")
            events = proj.get("events", [])
            
            proj_elements = []
            proj_elements.append(Paragraph(f"<b>{proj_name}</b>", item_title_style))
            for ev in events:
                txt = ev.get("text", "")
                link = ev.get("link")
                if link:
                    # Clean display link
                    display_link = link.replace("https://", "").replace("http://", "").rstrip("/")
                    bullet_text = f"• {txt} [<a href='{link}'><font color='{LINK_COLOR.hexval()}'>{display_link}</font></a>]"
                else:
                    bullet_text = f"• {txt}"
                proj_elements.append(Paragraph(bullet_text, bullet_style))
            
            story.append(KeepTogether(proj_elements))
        story.append(Spacer(1, 4))

    # 5. Technical Competence & Architecture Experience
    exp = cv.get("experiences", {})
    if exp:
        exp_title = exp.get("title", "Technical Architecture & Experience").upper()
        story.append(Paragraph(exp_title, section_heading_style))
        for it in exp.get("items", []):
            it_name = it.get("name", "")
            exp_elements = []
            exp_elements.append(Paragraph(f"<b>{it_name}</b>", item_title_style))
            for b in it.get("experience", []):
                exp_elements.append(Paragraph(f"• {b}", bullet_style))
            story.append(KeepTogether(exp_elements))

    doc.build(story, canvasmaker=NumberedCanvas)
    print("PDF successfully updated!")

if __name__ == '__main__':
    build_pdf()
