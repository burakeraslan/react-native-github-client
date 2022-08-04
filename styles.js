import { StyleSheet } from "react-native";

const appStyles = StyleSheet.create({
    
    container: {
        flex:1,
        backgroundColor: '#0C0C0C',
        alignItems: 'center',
        justifyContent: 'center',
    },

    input: {
        width: '85%',
        backgroundColor: '#262626',
        height: 40,
        padding: 5
    },

   searchButton: {
        width: '15%',
        height: 40,
        backgroundColor: '#262626',
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    alignmentInputAndTouchable: {
        width:'90%',
        alignItems: 'flex-end',
        justifyContent: 'center',
        marginTop:'5%',
        flexDirection: 'row'
    },

    resultSearch: {
        flex:1,
        width:'90%',
        marginTop: '5%',
    },

    headerText: {
        color: '#EAEAEA',
        fontSize: 17,
    },

    header: {
        height:'7%',
        width:'90%',
        marginTop: '5%',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#DDFFCC',
    },

    avatarPhoto: {
        width: 40,
        height: 40,
        marginRight:10,
        borderRadius: 40,
        marginLeft: 5,
        marginRight: 10,
        borderWidth: 1,
        borderColor: '#DDFFCC'
    },

    users: {
        flexDirection:'row', 
        margin: 1, 
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: 50,
        backgroundColor: '#262626',
    },

   userProfileScreen1: {
        flex: 2,
        margin:10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
   },

   userProfileScreen2: {
        flex: 4,
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
        flexDirection: 'row',
   },

   profilePhoto: {
        width: 150,
        height: 150,
        borderRadius: 175,
        borderWidth: 1,
        borderColor: '#DDFFCC'
   },

   userInformation: {
        width: '53%',
        height: '100%',
        justifyContent: 'center',

   },

   userInformationText: {
        color: '#EAEAEA',
   },

    publicReposButton: {
        marginTop: '5%',
        backgroundColor: '#DDFFCC',
        alignItems: 'center'
    },

    userProfileScreen201: {
        width: '100%',
        backgroundColor: '#0C0C0C',
        flex: 1,
    },

    userProfileScreen202: {
        width: '100%',
        backgroundColor: '#0C0C0C',
        flex: 1,
    },

    avatarPhoto1: {
        width: 40,
        height: 40,
        marginRight: 10,
        marginLeft: 5,
        borderRadius: 40,
    },

    usernameTextInNavigation: {
        color: '#EAEAEA'
    },

    followScreen: {
        flexDirection:'row', 
        margin:1, 
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor:'#262626',
        height: 50,
    },

    reposScreenBackground: {
        flex: 1,
        backgroundColor: '#0C0C0C',
    },

    reposResult: {
        width:'100%',
        height: 60,
        margin: 1,
        backgroundColor:'#262626',
        justifyContent: 'center',
        alignItems: 'center'
    },

    reposText: {
        marginLeft: 20,
        color: '#EAEAEA'
    }

  });

  export default appStyles