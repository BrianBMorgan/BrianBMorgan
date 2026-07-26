'use client';
import { Button } from '@/components/ds';
import { Download } from '@/components/icons';

/**
 * Download-as-PDF control for the résumé. Uses the browser's native print
 * pipeline (window.print) against the page's @media print stylesheet, so the
 * saved PDF always matches the live content — no generated-file drift, no
 * client-side PDF library, nothing that a static GitHub Pages host can't serve.
 * The document title is swapped so the browser's Save-as-PDF defaults to a
 * clean filename, then restored.
 */
export function ResumeDownloadButton() {
  const handlePrint = () => {
    const original = document.title;
    document.title = 'Brian B. Morgan — Resume';
    window.print();
    // Restore after the print dialog settles (afterprint isn't reliable everywhere).
    setTimeout(() => {
      document.title = original;
    }, 500);
  };

  return (
    <Button variant="primary" onClick={handlePrint} iconRight={<Download size={16} />}>
      Download PDF
    </Button>
  );
}
