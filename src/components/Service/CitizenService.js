import axios from "axios";

export const SaveNewCitizen = async (data) =>{

    return await axios.post(process.env.REACT_APP_API_NAME+"api/citizens",data)
            .then((response) => {
                return response.data;
            })
}