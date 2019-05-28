import React from 'react';
import './app.css';
import Modal from "../modal";
import Button from "../button";
import {Container, Row, Col, ScreenClassProvider} from 'react-grid-system';
import Header from "../layout/header";
import Footer from "../layout/footer";
import Page from "../layout/page";
import Text from "../text/text";
import Card from "../card";
import {CardTitles, CardTitle, CardContent, CardImage} from "../card/card-utils/card-utils";
import {HeaderLogo} from "../layout/header/header-utils/header-utils";
import Image from "../image/image";
import {FaBeer} from 'react-icons/fa';
import Menu from "../menu/menu";
import Block from "../block/block";
import Slider from "../slider/slider";

const headerMainMenu = [{label: 'home', href: 'home'}, {label: 'about', href: 'about'}];
const headerIconsMenu = [{
    label: <FaBeer color={'red'}/>,
    href: 'home'
}, {
    label: 'about', href: 'about'
}];

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            modalActive: false,
            debug: this.props.debug
        }
    }

    toggleModal = () => {
        this.setState({
            modalActive: !this.state.modalActive
        })
    };

    render() {
        const {modalActive, debug} = this.state;
        console.log(this.props);
        return (
            <ScreenClassProvider render={
                screenClass => (
                    <p style={{color: 'red', fontSize: ['lg', 'xl'].includes(screenClass) ? '2rem' : '1rem'}}>
                        Screen class: {screenClass}
                    </p>)}>

                <div id={'app'} className={`app ${debug ? 'debug' : ''}`}>
                    {modalActive &&
                    <Modal toggle={this.toggleModal}
                           center
                           active={modalActive}
                           animate={'fade'}
                           title={'Modal title'}
                           subtitle={'Modal subtitle'}
                           description={'Modal description'}/>
                    }

                    <Header backgroundColor={'pink'} padding={this.props.Gutter.md}>
                        <Container width={'100%'}>
                            <Row justify={'between'}>
                                <Menu items={headerMainMenu} dir={'x'}/>
                                <HeaderLogo logo={<Image
                                    src={'http://admin.youdoadventures.com/wp-content/uploads/2019/05/truck.png'}
                                    width={100}/>}/>
                                <Menu items={headerIconsMenu} dir={'x'}/>
                            </Row>
                        </Container>
                    </Header>

                    <Page>

                        <Container>
                            <Slider debug={true} items={[ <Card>
                                <CardTitles title={'Card Title'} subtitle={'Card Subtitle'}/>
                                <CardTitle center>BLA</CardTitle>
                                <CardContent>
                                    <CardImage
                                        src={'https://www.virginexperiencedays.co.uk/content/img/product/large/the-view-from-the-12102928.jpg'}/>
                                    <Button onClick={this.toggleModal} value={'show more'} block/>
                                </CardContent>
                            </Card>,  <Card>
                                <CardTitles title={'Card Title'} subtitle={'Card Subtitle'}/>
                                <CardTitle center>BLA</CardTitle>
                                <CardContent>
                                    <CardImage
                                        src={'https://www.virginexperiencedays.co.uk/content/img/product/large/the-view-from-the-12102928.jpg'}/>
                                    <Button onClick={this.toggleModal} value={'show more'} block/>
                                </CardContent>
                            </Card>,  <Card>
                                <CardTitles title={'Card Title'} subtitle={'Card Subtitle'}/>
                                <CardTitle center>BLA</CardTitle>
                                <CardContent>
                                    <CardImage
                                        src={'https://www.virginexperiencedays.co.uk/content/img/product/large/the-view-from-the-12102928.jpg'}/>
                                    <Button onClick={this.toggleModal} value={'show more'} block/>
                                </CardContent>
                            </Card>,  <Card>
                                <CardTitles title={'Card Title'} subtitle={'Card Subtitle'}/>
                                <CardTitle center>BLA</CardTitle>
                                <CardContent>
                                    <CardImage
                                        src={'https://www.virginexperiencedays.co.uk/content/img/product/large/the-view-from-the-12102928.jpg'}/>
                                    <Button onClick={this.toggleModal} value={'show more'} block/>
                                </CardContent>
                            </Card>]} speed={.5} />
                        </Container>

                        <Block gutter={'md'}>
                            <Container>
                                <Text tag={1} value={'Welcome'} center/>
                                <Row>
                                    <Col sm={6}>
                                        <Card>
                                            <CardTitles title={'Card Title'} subtitle={'Card Subtitle'}/>
                                            <CardTitle center>BLA</CardTitle>
                                            <CardContent>
                                                <CardImage
                                                    src={'https://www.virginexperiencedays.co.uk/content/img/product/large/the-view-from-the-12102928.jpg'}/>
                                                <Button onClick={this.toggleModal} value={'show more'} block/>
                                            </CardContent>
                                        </Card>
                                    </Col>
                                </Row>
                            </Container>
                        </Block>

                        <Block gutter={'md'}>
                            <Container>
                                <Row>
                                    <Col sm={6}>
                                        <Image
                                            src={'https://www.virginexperiencedays.co.uk/content/img/product/large/the-view-from-the-12102928.jpg'}/>
                                    </Col>
                                    <Col sm={6}>
                                        <Text tag={2} center>TITLE</Text>
                                        <Text tag={3} center>TITLE</Text>
                                    </Col>
                                </Row>
                            </Container>
                        </Block>

                        <Block gutter={'md'}>
                            <Container>
                                <Card>
                                    <CardTitles title={'Title'} subtitle={'Subtitle'} center/>
                                    <CardContent>
                                        <CardImage
                                            src={'https://www.virginexperiencedays.co.uk/content/img/product/large/the-view-from-the-12102928.jpg'}/>
                                    </CardContent>
                                </Card>
                            </Container>
                        </Block>

                    </Page>

                    <Footer backgroundColor={'red'} color={'pink'}/>
                </div>
            </ScreenClassProvider>
        );
    }
}

export default App;
