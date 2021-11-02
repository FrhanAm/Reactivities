import React from "react";
import Image from 'next/image';
import { Button, Container, Menu } from "semantic-ui-react";
import styles from "./navbar.module.css";

interface Props {
    openForm: () => void;
}

export default function NavBar({openForm}: Props) {
    return (
        <Menu inverted fixed="top" >
            <Container>
                <Menu.Item header>
                    <div className={styles.navLogo}>
                    <Image
                     src="/assets/logo.png"
                     alt="reactivity"
                     height={27}
                     width={27}
                    />
                    </div>
                    Reactivity
                </Menu.Item>
                <Menu.Item name="Activities"/>
                <Menu.Item>
                    <Button onClick={openForm} positive content="Create Activity" />
                </Menu.Item>
            </Container>
        </Menu>
    );
}