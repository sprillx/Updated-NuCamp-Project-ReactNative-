import { ScrollView } from "react-native-gesture-handler"
import { Card } from "react-native-elements"
import { Text } from "react-native"
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import * as Animatable from 'react-native-animatable'
import { Button } from "react-native-elements";
import { Icon } from "react-native-elements";
import * as MailComposer from 'expo-mail-composer';

const Drawer = createDrawerNavigator();

const ContactScreen = () => {
        const sendMail = () => {
                MailComposer.composeAsync({
                        recipients: ['campsites@nucamp.co'],
                        subject: 'Inquiry',
                        body: 'To whom it may concern:'
                });
        };

        return (
        <ScrollView>
                <Animatable.View
                        animation='fadeInDownBig'
                        duration={2000}
                        delay={1000}
                >
                                <Card wrapperStyle={{ margin: 20 }}>
                                        <Card.Title> Contact Information </Card.Title>
                                        <Card.Divider/>
                                        <Text>  1 Nucamp Way </Text>
                                        <Text>  Seattle, WA 98001 </Text>
                                        <Text style={{margin: 10}}> U.S.A.</Text>
                                        
                                        <Text> Phone: 1-206-555-1234 </Text>
                                        <Text>Email: campsites@nucamp.co </Text>
                                        <Button
                                                title="Email"
                                                buttonStyle={{
                                                        backgroundColor: '#5637DD', margin: '40'}}
                                                icon={
                                                        <Icon
                                                                name='envelope-o'
                                                                type='font-awesome'
                                                                color='#fff'
                                                                iconStyle={{ marginRight: 10 }}
                                                        />
                                                }
                                                onPress={ () => sendMail()}
                                        />

                                
                                </Card>
                </Animatable.View>
        </ScrollView>
        )
       
}
const ContactNavigator = () => {
        const Stack = createStackNavigator()
        return (
                <Stack.Navigator>
                        <Stack.Screen
                                name='Contact'
                                options={{ title: 'Contact Us' }}
                        />
                </Stack.Navigator>
        )
}

<Drawer.Navigator
        initialRouteName="Contact"
        drawerStyle={{ backgroundColor: '#CEC8FF' }}
>
        <Drawer.Screen
                name='Contact'
                component={ContactNavigator}
                options={{ title: 'Contact Us' }}

        />




</Drawer.Navigator>


export default ContactScreen