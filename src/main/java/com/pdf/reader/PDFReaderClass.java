package com.pdf.reader;

import java.io.BufferedInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.MalformedURLException;
import java.net.URL;

import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.text.PDFTextStripper;
import org.testng.annotations.Test;

public class PDFReaderClass {
	
	
	@Test
	
	public void pdfReader() throws IOException {
		
		URL url = new URL("https://www.adobe.com/content/dam/acom/en/devnet/acrobat/pdfs/pdf_open_parameters.pdf");
		
		InputStream is = url.openStream();
		BufferedInputStream fileParse = new BufferedInputStream(is);
		
		PDDocument document = null;
		
		document = PDDocument.load(fileParse);
		
		String pdfContent = new PDFTextStripper().getText(document);
		
		System.out.println("PDF Conetent"+pdfContent);
		
		
		
		
		
	}
}
