import { Badge, Group, Indicator, Modal, Text, Button, ScrollArea } from "@mantine/core";
import { Image } from "@mantine/core";

const FullProjectModal = (props: any) => {
    return (
        <Modal.Root
            scrollAreaComponent={ScrollArea.Autosize}
            size="lg"
            classNames={{
                content: "!w-[95%] sm:!w-[80%] md:!w-[70%]",
            }}
            className="font-mono"
            opened={props.opened}
            onClose={props.close}
        >
            <Modal.Overlay />
            <Modal.Content className="!rounded-3xl">
                <Modal.Header className="!bg-bgColor !border-primaryColor border-2 !border-b-0 !rounded-tl-3xl !rounded-tr-3xl">
                    <Modal.Title data-autofocus className="!text-2xl sm:!text-3xl text-white flex gap-3 items-center font-bold">
                        {props.title}
                        {props.live === true && (
                            <Badge
                                className="flex gap-1 items-center"
                                size="lg"
                                variant="outline"
                                color="red"
                                rightSection={<Indicator color="red" position="middle-end" size={10} processing />}
                            >
                                Live
                            </Badge>
                        )}
                    </Modal.Title>
                    <Modal.CloseButton size="md" iconSize="30px" className="!bg-bgColor !text-red-500" />
                </Modal.Header>

                <Modal.Body className="!bg-bgColor !border-primaryColor border-2 !border-t-0 !rounded-bl-3xl !rounded-br-3xl p-4 sm:p-6 max-h-[85vh] overflow-y-auto">
                    {/* Image */}
                    <Image
                        className="!rounded-xl !pt-2 !shadow-[0_0_5px_0_#64FFDA]"
                        src={props.image}
                        alt={props.image}
                    />

                    {/* Technologies Badge */}
                    <Group mt="sm" mb="sm" className="flex flex-wrap gap-2">
                        {props.technologies.map((tech: string, index: number) => (
                            <Badge key={index} size="lg" variant="light" color="#64FFDA">
                                {tech}
                            </Badge>
                        ))}
                    </Group>

                    {/* Description Text */}
                    <Text className="!text-justify !sm:text-lr  !text-textColor" size="md">
                        {props.desc}
                    </Text>

                    {/* Action Buttons */}
                    <div className="flex flex-col lg:flex-row gap-4 mt-6 mb-4">
                        <a href={props.github} target="_blank" className="w-full">
                            <Button
                                variant="outline"
                                size="md"
                                color="#64FFDA"
                                fullWidth
                                radius="md"
                                className="!w-full"
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
                                    className="!w-full"
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
                                className="!w-full"
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
