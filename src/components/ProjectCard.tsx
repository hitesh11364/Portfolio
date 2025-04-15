import { Card, Image, Text, Badge, Button, Group, Indicator } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import FullProjectModal from './FullProjectModal';

const ProjectCard = (props: any) => {
    const [opened, { open, close }] = useDisclosure(false);


    return (
        <div data-aos="fade-up" data-aos-duration="800" className="w-full sm:w-full md:w-full lg:w-[360px]">
            <Card
                onClick={open}
                className="!bg-bgColor w-full cursor-pointer transition-transform duration-300 ease-in-out hover:!scale-[1.02] !mb-5 hover:!shadow-[0_0_10px_1px_#64FFDA] !border-primaryColor border-2"
                shadow="lg"
                padding="lg"
                radius="lg"
                withBorder
            >
                <Card.Section className="p-3">
                    <Image
                        className='!rounded-xl !shadow-[0_0_5px_0_#64FFDA] object-cover h-[200px] w-full'
                        src={props.image}
                        alt={props.image}
                    />
                </Card.Section>

                <Group justify="space-between" mt="xs" mb="xs">
                    <Text className='!text-xl sm:!text-2xl gap-2 !font-bold !text-white flex items-center'>
                        {props.title}
                        {props.live === true && (
                            <Badge
                                variant="outline"
                                color="red"
                                rightSection={<Indicator color="red" position='middle-end' size={7} processing />}
                            >
                                Live
                            </Badge>
                        )}
                    </Text>
                </Group>

                <Group mb="xs" className='flex-wrap'>
                    {props.technologies.map((tech: string, index: number) =>
                        index < 3 && (
                            <Badge key={index} size='lg' variant="light" color="#64FFDA">
                                {tech}
                            </Badge>
                        )
                    )}
                </Group>

                <Text className='!text-justify' lineClamp={5} size="sm" c="dimmed">
                    {props.desc}
                </Text>

                <Button onClick={open} className='!bg-primaryColor !text-bgColor mt-4 text-base sm:text-base 
             transition-transform duration-300 ease-in-out transform-gpu perspective-500
             hover:scale-105 hover:-translate-y-1 hover:rotate-x-6 hover:rotate-y-2
             active:scale-95 active:rotate-x-0 active:rotate-y-0' fullWidth radius="md">
                    Show More
                </Button>
            </Card>

            <FullProjectModal
                opened={opened}
                close={close}
                title={props.title}
                desc={props.desc}
                image={props.image}
                live={props.live}
                link={props.link}
                github={props.github}
                technologies={props.technologies}
            />
        </div>
    );
};

export default ProjectCard;
