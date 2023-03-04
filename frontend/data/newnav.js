export default {
    base: {
        children: ["contact", "documents"],
        id: "base",
    },

    contact: {
        icon: "folder",
        id: "contact",
        title: "Contact",
        children: ["addressbook", "contactmanagement"],
    },

    addressbook: {
        icon: "user",
        id: "contact-list",
        title: "Address Book",
        url: "/address-list",
    },

    contactmanagement: {
        icon: "file-text",
        id: "contact_management",
        title: "Contact Management",
        url: "/contact-add"
    },

    documents: {
        icon: "file-text",
        id: "documents",
        title: "Documents",
        url: "/document-list",
    },

};
