import { StyleService } from "@ui-kitten/components";

const styles = StyleService.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingHorizontal: 22,
        paddingTop: 48,    
        height: "100%" 
    },
    containerImg:{
        width: "100%",
        marginBottom: 30,
        alignItems: "center",
        justifyContent: 'flex-start',
    },
    containerForm: {
        width: "100%",
        height: "auto",
        justifyContent: "space-around",
    },
    containerInput: {
        marginVertical: 20,
        width: "100%",
    },
    containerFooter: {
        width: "100%",
        paddingTop: 10,
        justifyContent: "space-around",
        borderTopWidth: 1,
        borderColor: "#ccc",
    },
    containerCheckForgot: {
      flexDirection: "row",
      justifyContent: "space-between",
      height: 50,  
      marginBottom: 10,
    },
    button: {
        borderRadius: 20,
        marginBottom: 20,
    },  
    image: {
        width: 150,
        height: 123,
        contentFit: "contain",
        borderRadius: 25,
        borderColor: 'black',
        marginBottom: 15
    },
    row: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 20
    },
    divider: { 
        backgroundColor: 'black', 
        width: '22%',
        height: 2
    }, 
    title: {
        marginBottom: 20,
      },
      buttonFAB: {
        position: "absolute",
        bottom: 20,
        right: 20,
        width: 70,
        height: 70,
        borderRadius: 50,
        color: "white",
    
      },
      icon: {
        width: 32,
        height: 32,
      },
});

export default styles