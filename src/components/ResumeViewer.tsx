import { useState, useEffect } from "react";
import {
    ActionIcon,
    Modal,
    ScrollArea,
    Tooltip,
} from "@mantine/core";
import { IconArrowBigDownLineFilled } from "@tabler/icons-react";
import { Document, Page, pdfjs } from "react-pdf";
import { Info } from "../Users";

// Set up PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const ResumeViewer = (props: any) => {
    const [numPages, setNumPages] = useState<number | null>(null);
    const [showScrollbar, setShowScrollbar] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setShowScrollbar(window.innerWidth >= 768); // Adjust breakpoint to hide scrollbar on mobile/tablet
        };

        handleResize(); // Initial check
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
        setNumPages(numPages);
    };

    return (
        <Modal.Root
            scrollAreaComponent={ScrollArea.Autosize}
            size="auto"
            className="font-mono"
            centered
            opened={props.opened}
            onClose={props.close}
        >
            <Modal.Overlay />
            <Modal.Content className="!rounded-3xl">
                <Modal.Header className="!bg-bgColor !border-primaryColor border-2 !border-b-0 !rounded-tl-3xl !rounded-tr-3xl">
                    <Modal.Title data-autofocus className="!text-4xl text-white !font-bold">
                        <div className="flex items-center gap-3">
                            Resume
                            <Tooltip label="Download" className="!text-bgColor" color="#64FFDA" position="right" offset={5}>
                                <ActionIcon
                                    className="!text-primaryColor"
                                    component="a"
                                    href="Resume Hitesh.pdf"
                                    download={Info.name}
                                    variant="outline"
                                    color="#64FFDA"
                                >
                                    <IconArrowBigDownLineFilled />
                                </ActionIcon>
                            </Tooltip>
                        </div>
                    </Modal.Title>
                    <Modal.CloseButton size="md" iconSize="30px" className="!bg-bgColor !text-red-500" />
                </Modal.Header>

                <Modal.Body className={`!bg-bgColor !border-primaryColor border-2 !border-t-0 !rounded-bl-3xl !rounded-br-3xl max-h-[85vh] overflow-auto ${showScrollbar ? "custom-scrollbar" : "scrollbar-hide"}`}>
                    <Document file="Resume Hitesh.pdf" onLoadSuccess={onDocumentLoadSuccess}>
                        {Array.from(new Array(numPages), (_, index) => (
                            <Page
                                key={`page_${index + 1}`}
                                pageNumber={index + 1}
                                renderTextLayer={false}
                                renderAnnotationLayer={false}
                                width={
                                    typeof window !== "undefined"
                                        ? window.innerWidth < 640
                                            ? 350 // Increase this value for a larger size on small screens
                                            : window.innerWidth < 768
                                                ? 500 // Increase this value for a larger size on tablet screens
                                                : 600 // Larger size for larger screens
                                        : 600 // Default width
                                }
                            />
                        ))}
                    </Document>
                </Modal.Body>
            </Modal.Content>
        </Modal.Root>
    );
};

export default ResumeViewer;
