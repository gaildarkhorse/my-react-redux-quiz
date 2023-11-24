import React from 'react';
import { PDFDownloadLink, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// Styles for PDF document
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  title: {
    fontSize: 12,
    marginBottom: 10,
  },
});

// Component representing the PDF document
const PDFDocument = ({body}) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.title}>{body}</Text>
        </View>
    </Page>
  </Document>
);

const HomepageToPDF = ({content}) => {
  return (
    <div>
      <PDFDownloadLink document={<PDFDocument body={content}/>} fileName="homepage.pdf">
        {({ blob, url, loading, error }) =>
          loading ? 'Generating PDF...' : 'Download PDF'
        }
      </PDFDownloadLink>
    </div>
  );
};

export default HomepageToPDF;