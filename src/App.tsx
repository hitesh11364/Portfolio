import '@mantine/core/styles.css';
import './App.css';
import HomePage from './components/HomePage';
import { MantineProvider } from '@mantine/core';
import { pdfjs } from 'react-pdf';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { createTheme } from '@mantine/core';




pdfjs.GlobalWorkerOptions.workerSrc = `https://cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  const theme = createTheme({
    breakpoints: {
      xsm: '350px',
      xs: '476px',
      sm: '640px',
      md: '768px',
      bs: '900px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  })

  return (
    <MantineProvider theme={theme}>
      <HomePage />
    </MantineProvider>

  );
}

export default App;
