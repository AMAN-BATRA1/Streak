import axios from "axios";
const BASE_URL = "https://boardingschoolsoftware.com/application/sla_services.php";

const AxiosBase = axios.create({baseURL: BASE_URL});

export default AxiosBase;