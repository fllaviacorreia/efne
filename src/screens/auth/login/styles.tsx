import { StyleService } from "@ui-kitten/components";

const styles = StyleService.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        paddingHorizontal: 10,
        paddingTop: 48,
        alignItems: "center",
        justifyContent: "space-between",       
    },
    containerImg:{
        width: "100%",
        height: "18%",
        alignItems: "center",
        justifyContent: 'flex-start',
    },
    containerForm: {
        width: "100%",
        height: "40%",
        justifyContent: "space-around",
    },
    containerInput: {
        marginBottom: 20,
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
        width: "60%",
        height: "100%",
        resizeMode: "contain",
    },
});

export default styles