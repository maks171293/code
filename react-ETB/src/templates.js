let defaultTemplates = [
  {
    templateId: "template-text",
    templateText: "Type the text",
    templateType: "p",
    htmlTemplate: `<p>Type the text</p>`,
    blockType: "Text Block",
    css: {
      backgroundColor: "#fff",
      color: "#000"
    }
  },
  {
    templateId: "template-header",
    templateText: "Type the text",
    templateType: "tr",
    htmlTemplate: `<p dir="auto" style="text-align:right;"><a href="[WEB_VERSION_URL]" target="_blank"><sup>online version</sup></a></p>`,
    blockType: "Header Block",
    css: {
      backgroundColor: "#fff",
      color: "#000"
    }
  },
  {
    templateId: "template-footer",
    templateText: "Type the text",
    templateType: "tr",
    htmlTemplate: `<p style="text-align: center;">Copyright &copy; [CURRENT_YEAR] [COMPANY_NAME], All rights reserved.</p>
<p style="text-align: center;"><strong>Our mailing address is:</strong></p>
<p style="text-align: center;">[LIST_FROM_EMAIL]</p>
<p style="text-align: center;">Want to change how you receive these emails?</p>
<p style="text-align: center;">You can <a style="color: #fff" href="[UPDATE_PROFILE_URL]">update your preferences</a> or <a style="color: #fff" href="[UNSUBSCRIBE_URL]">unsubscribe from this list</a>.</p>
`,
    blockType: "Footer Block",
    color: "#fff",
    css: {
      backgroundColor: "#fff",
      color: "#000"
    }
  },
  {
    templateId: "template-text-boxed",
    templateText: "This is a Boxed Text block. Use a contrasting background to draw attention to this content.",
    templateType: "p",
    htmlTemplate: `<p>This is a Boxed Text block. Use a contrasting background to draw attention to this content.</p>`,
    blockType: "Text Boxed Block",
    bgc: '#404040',
    color: '#fff'
  },
  {
    templateId: "template-img",
    templateType: "img",
    blockType: "Image Block",
    imageAlign: 'center'
  },
  {
    templateId: "template-img-group",
    templateType: "table",
    blockType: "Image Group Block",
    imageAlign: 'center'
  },
  {
    templateId: "template-img-caption",
    templateType: "table",
    blockType: "Image Caption Block",
    imageAlign: 'center'
  },
  {
    templateId: "template-soc",
    templateType: "td",
    elementWidth: 'fitToSize',
    blockType: "Social Share Block",
    imageAlign: 'center',
    templateText: null,
    socialLayout: 'horizontal'
  },
  {
    templateId: "template-button",
    templateType: "td",
    elementWidth: 'fitToSize',
    buttonBorder: 'none',
    blockType: "Button Block",
    buttonAlign: 'center',
    buttonBgc: '#2caadf',
    color: '#fff',
    buttonBorderRadius: '3',
    blockFontWeight: 'bold',
    fontSize: '16',
    templateText: null,
    htmlTemplate: `<table cellspacing="0" cellpadding="0" align="center" data-button-type="web">
<tr>
<td style="-webkit-border-radius: 3px; padding: 15px; background-color: #2caadf; -moz-border-radius: 3px; border-radius: 3px; display: block;">
<a href="http://www.EXAMPLE.com/" target="_blank" style="sans-serif; color: #fff; text-decoration: none!important; text-decoration: none; line-height:100%; width:100%; display:inline-block"><span>Buy Now</span></a>
</td>
</tr>
</table>`
  },
  {
    templateId: "template-divider",
    templateText: null,
    templateType: "td",
    className: 'divider-block',
    htmlTemplate: ``,
    blockType: "Divider Block",
    borderBottomColor: "#333",
    borderBottomSize: "2",
    borderBottomStyle: "solid",
    paddingTop: '15',
    paddingBottom: '20',
    css: {
      border: "none",
      borderBottom: "2px solid #333",
      fontSize: "1px",
      lineHeight: "1px",
      width: "100%",
      paddingTop: "10px",
      paddingBottom: "10px"
    }
  }
];

export default defaultTemplates;
