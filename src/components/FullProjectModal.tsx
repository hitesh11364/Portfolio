import {
    Badge,
    Group,
    Indicator,
    Modal,
    Text,
    Button,
    ScrollArea,
} from "@mantine/core";
import { Image } from "@mantine/core";

const FullProjectModal = (props: any) => {
    return (
        <Modal.Root
            scrollAreaComponent={ScrollArea.Autosize}
            fullScreen
            opened={props.opened}
            onClose={props.close}
            className="font-mono"
            classNames={{
                content: "max-w-[95%] sm:max-w-[85%] md:max-w-[70%] mx-auto",
            }}
        >
            <Modal.Overlay />
            <Modal.Content className="!rounded-2xl !bg-bgColor border-2 border-primaryColor">
                <Modal.Header className="!bg-bgColor border-b-2 border-primaryColor !rounded-t-2xl">
                    <Modal.Title className="text-white text-2xl sm:text-3xl font-bold flex gap-3 items-center">
                        {props.title}
                        {props.live && (
                            <Badge
                                className="flex gap-1 items-center"
                                size="lg"
                                variant="outline"
                                color="red"
                                rightSection={
                                    <Indicator
                                        color="red"
                                        position="middle-end"
                                        size={10}
                                        processing
                                    />
                                }
                            >
                                Live
                            </Badge>
                        )}
                    </Modal.Title>
                    <Modal.CloseButton
                        size="md"
                        iconSize="20px"
                        className="!bg-bgColor !text-red-500"
                    />
                </Modal.Header>

                <Modal.Body className="p-4 sm:p-6 overflow-y-auto max-h-[85vh]">
                    {/* Image */}
                    <Image
                        className="!rounded-xl !shadow-[0_0_5px_0_#64FFDA] mb-4"
                        src={props.image}
                        alt={props.title}
                    />

                    {/* Tech stack */}
                    <Group gap="xs" mt="sm" mb="sm" className="flex flex-wrap">
                        {props.technologies.map((tech: string, index: number) => (
                            <Badge
                                key={index}
                                size="lg"
                                variant="light"
                                color="#64FFDA"
                                className="mb-1"
                            >
                                {tech}
                            </Badge>
                        ))}
                    </Group>

                    {/* Description */}
                    <Text size="sm" className="text-justify text-textColor mb-4">
                        {props.desc}
                    </Text>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 mt-4">
                        <a href={props.github} target="_blank" className="w-full">
                            <Button
                                variant="outline"
                                size="md"
                                color="#64FFDA"
                                fullWidth
                                radius="md"
                            >
                                View Code
                            </Button>
                        </a>
                        {props.live ? (
                            <a href={props.link} target="_blank" className="w-full">
                                <Button
                                    variant="outline"
                                    size="md"
                                    color="#64FFDA"
                                    fullWidth
                                    radius="md"
                                >
                                    View Live App
                                </Button>
                            </a>
                        ) : (
                            <Button
                                variant="outline"
                                size="md"
                                color="gray"
                                fullWidth
                                radius="md"
                                disabled
                            >
                                Live App Unavailable
                            </Button>
                        )}
                    </div>
                </Modal.Body>
            </Modal.Content>
        </Modal.Root>
    );
};

export default FullProjectModal;
