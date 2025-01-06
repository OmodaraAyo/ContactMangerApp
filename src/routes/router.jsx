import Layout from "../layout/Layout"
import AddContact from "../pages/AddContact"
import ContactDetails from "../pages/contactDetails/ContactDetails"
import UpdateContact from "../pages/updateContact/updateContact"


const ROUTES = [
    {
        path: "/",
        element: <Layout/>
    },
    {
        path: "/addContact",
        element: <AddContact/>
    },
    {
        path: "/contactDetails/:contactId",
        element: <ContactDetails/>
    },
    {
        path: "/update/:contactId",
        element: <UpdateContact/>
    },
    
]
export default ROUTES