import React from "react";
import {Header, Circle, Icon, News, Details, AddD, IconSub, InfoOne, Submit, Form,  Info, Con, View, EyeIc, Time, GenreDif, Desc, Middle, ListBig, VMBtn, Box, HLink, MList, Genre, List, Title,
        Container, EmailInput} from './Header.js';

const Home = () => {
    return (
    <>
    <Header>
        <div style={{display: 'flex',
                     justifyContent: 'center',
                     alignItems: 'center',
                     height: '90vh',
                     backgroundImage: 'linear-gradient(to bottom right, #141414, #070707)',
                    }}>
            <Icon>
                <Circle>
                    <div></div>
                </Circle>
            </Icon>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;
        <div>
            <h1>Find your movies here</h1>
        <Desc>
            <p>Explore our gallery full of
                exciting films from all
                around the globe<br></br>only your entertainments. No hidden
                charges or disturbing ads.</p>
        </Desc>
        </div>
        </div>
    </Header>
    <MList>
        <div>
            <Title>
                <div><br></br>New Releases</div>
                <VMBtn style={{float: 'right'}}>
                    <p>View More</p>
                </VMBtn>
            </Title>
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            <Container>
                     <ListBig>
                     <Genre>
                        <p>Fantasy</p>
                    </Genre>
                        <View>
                            <EyeIc>
                                <div></div>
                            </EyeIc>
                            <span styled={{float: 'left'}}>1hr 24mins</span>
                        </View>
                        <View>
                            <Con>
                                <div></div>
                            </Con>
                            <span styled={{float: 'right'}}>21.3k views</span>
                        </View>
                        <br></br><p>The Ring's Lord</p>
                    </ListBig>
                    <Middle>
                    <GenreDif>
                        <p>Fantasy</p>
                    </GenreDif>
                    <Time>
                            <EyeIc>
                                <div></div>
                            </EyeIc>
                            <span styled={{float: 'left'}}>1hr 24mins</span>
                    </Time>
                    <Time>
                            <Con>
                                <div></div>
                            </Con>
                            <span styled={{float: 'right'}}>21.3k views</span>
                    </Time>
                    <br></br><span>Interspace</span>
                    </Middle>
                <List>
                <GenreDif>
                        <p>Fantasy</p>
                </GenreDif>
                <Time>
                        <EyeIc>
                            <div></div>
                        </EyeIc>
                        <span styled={{float: 'left'}}>1hr 24mins</span>
                </Time>
                <Time>
                        <Con>
                            <div></div>
                        </Con>
                        <span styled={{float: 'right'}}>21.3k views</span>
                </Time>
                <br></br><span>Interspace</span>
                </List>
                <List>
                <GenreDif>
                        <p>Fantasy</p>
                </GenreDif>
                <Time>
                        <EyeIc>
                             <div></div>
                        </EyeIc>
                        <span styled={{float: 'left'}}>1hr 24mins</span>
                </Time>
                <Time>
                        <Con>
                            <div></div>
                        </Con>
                            <span styled={{float: 'right'}}>21.3k views</span>
                </Time>
                <br></br><span>Her & Him</span>
                </List>
                <List>
                <GenreDif>
                        <p>Fantasy</p>
                </GenreDif>
                <Time>
                        <EyeIc>
                            <div></div>
                        </EyeIc>
                        <span styled={{float: 'left'}}>1hr 24mins</span>
                </Time>
                <Time>
                        <Con>
                            <div></div>
                        </Con>
                        <span styled={{float: 'right'}}>21.3k views</span>
                </Time>
                <br></br><span>Lo Lo Land</span>
                </List>
            </Container>
        </div>
    </MList>
    <Info>
        <div>
            <InfoOne>
                <p style={{fontSize: '35px'}}>PcariMovie</p>
               <br></br><p style={{fontSize: '15px'}}>Lorem ipsum dolor sit amer, consec tetur
                   adipis cing elit, sed do eisumond tempor
                   incidunt ut labore.</p>
                
                <br></br><br></br><p style={{fontWeight: 'bold'}}>Join Newsletters</p>
                <News>
                        <Form>
                            <div>
                                <EmailInput type="text" placeholder="Insert your mail here">
                                </EmailInput>
                            <IconSub>
                                <div></div>
                            </IconSub>
                            </div>
                        </Form>
                 </News> 
            </InfoOne>
            <Details>
                <div>
                <AddD>
                    <p>Product</p>
                </AddD>
                <AddD>
                    <p>Movies</p>
                </AddD>
                <AddD>
                    <p>TV Show</p>
                </AddD>
                <AddD>
                    <p>Videos</p>
                </AddD>
                <AddD>
                    <p>Media Group</p>
                </AddD>
                <AddD>
                    <p>Nice Studio</p>
                </AddD>
                <AddD>
                    <p>Nice News</p>
                </AddD>
                <AddD>
                    <p>Nice TV</p>
                </AddD>
                <AddD>
                    <p>Site Map</p>
                </AddD>
                <AddD>
                    <p>About</p>
                </AddD>
                <AddD>
                    <p>Careers</p>
                </AddD>
                <AddD>
                    <p>Press</p>
                </AddD>
                </div>
            </Details>
        </div>
    </Info>
    </>
    );
};

export default Home;