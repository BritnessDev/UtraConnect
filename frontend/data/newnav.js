import { getMessage } from "../helpers/lang";

export default {
    base: {
        children: ["contact", "documents", "datacollection"],
        id: "base",
    },

    contact: {
        icon: "folder",
        id: "contact",
        title: getMessage("contact"),
        children: ["addressbook", "contactmanagement"],
    },

    addressbook: {
        icon: "user",
        id: "contact-list",
        title: getMessage("Address Book"),
        url: "/address-list",
    },

    contactmanagement: {
        icon: "file-text",
        id: "contact_management",
        title: getMessage("Contact Management"),
        url: "/contact-add"
    },

    documents: {
        icon: "file-text",
        id: "documents",
        title: getMessage("Documents"),
        url: "/document-list",
    },
    datacollection: {
        icon: "file-text",
        id: "datacollection",
        title: getMessage("Data Collection"),
        url: "/add-pdf",
    },
};
