import React from "react";
import Image from 'next/image';
import { Button, Container, Menu } from "semantic-ui-react";
import styles from "./navbar.module.css";
import { useStore } from "../../stores/store";


export default function NavBar() {

    const {activityStore} = useStore();

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
                    <Button onClick={() => activityStore.openForm()} positive content="Create Activity" />
                </Menu.Item>
            </Container>
        </Menu>
    );
}