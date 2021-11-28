import { Button, Container, Menu, Image } from "semantic-ui-react";
import styles from "./navbar.module.css";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item as={NavLink} to="/" exact header>
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
        <Menu.Item as={NavLink} to="/activities" name="Activities" />
        <Menu.Item>
          <Button
            as={NavLink}
            to="/createActivity"
            positive
            content="Create Activity"
          />
        </Menu.Item>
      </Container>
    </Menu>
  );
}
