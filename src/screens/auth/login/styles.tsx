import { StyleService } from "@ui-kitten/components";

const styles = StyleService.create({
    container: {
        flex: 1,
        width: "100%",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        
    },
    containerImg:{
        width: "100%",
        height: "25%",
        alignItems: "center",
        justifyContent: 'center',
    },
    containerForm: {
        width: "100%",
    },
    containerInput: {
        marginBottom: 20,
    },
    containerFooter: {
        width: "100%",
        height: "15%",
        justifyContent: "space-around",
    },
    button: {
        borderRadius: 15,
    },  
});

export default styles