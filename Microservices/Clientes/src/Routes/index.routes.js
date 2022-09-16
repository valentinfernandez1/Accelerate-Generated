
//Entity Routes
import CityRoute from "./entityRoutes/CityRoute.js";
import ClientRoute from "./entityRoutes/ClientRoute.js";

//v1 Routes
import loginRoute from "./v1Routes/loginRoute.js";
import logoutRoute from "./v1Routes/logoutRoute.js";

//v2 Routes
import algoRoute from "./v2Routes/algoRoute.js";
import algoMasRoute from "./v2Routes/algoMasRoute.js";



export default {
	entityRoutes: [CityRoute,ClientRoute],
	v1Routes:[loginRoute,logoutRoute],
	v2Routes:[algoRoute,algoMasRoute],

	
}
