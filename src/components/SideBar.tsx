import { useDisclosure } from '@mantine/hooks';
import { Drawer, Burger } from '@mantine/core';
import { navLinks } from './Header';
import { IconX } from '@tabler/icons-react';

type Props = {
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
};

const SideBar = ({ isOpen, setIsOpen }: Props) => {
    const [opened, { toggle }] = useDisclosure(false);

    const handleToggle = () => {
        const newState = !opened;
        toggle();
        setIsOpen(newState); // update parent state
    };

    return (
        <>
            <Drawer.Root
                className="md:hidden z-[100]"
                position="right"
                opened={opened}
                onClose={handleToggle}
                size="50%"
            >
                <Drawer.Overlay
                    className="z-[99]"
                    style={{
                        backgroundOpacity: 0.5,
                        backdropFilter: 'blur(10px)',
                    }}
                />
                <Drawer.Content className="z-[100]" bg="#0A192F">
                    {/* X icon with larger size and moved slightly down */}
                    <div className="flex justify-end pt-6 pr-4">
                        <IconX
                            className="cursor-pointer text-primaryColor"
                            size={36} // Increased size
                            onClick={handleToggle}
                        />
                    </div>

                    <Drawer.Body className="mt-20 flex flex-col gap-7 text-[1.2rem]" bg="#0A192F">
                        {navLinks(true)}
                    </Drawer.Body>
                </Drawer.Content>
            </Drawer.Root>

            <Burger
                className="md:!hidden !z-[9999]"
                color="#64FFDA"
                size="lg"
                opened={opened}
                onClick={handleToggle}
            />
        </>
    );
};

export default SideBar;
