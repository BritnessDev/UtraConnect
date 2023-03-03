export default {
    base: {
        children: ["office"],
        id: "base",
    },

    office: {
        icon: "folder",
        id: "office",
        title: "office",
        children: ["contact", "documents"],
    },

    contact: {
        icon: "user",
        id: "contact",
        title: "contact",
        url: "/address-list",
    },

    documents: {
        icon: "file-text",
        id: "documents",
        title: "documents",
        url: "/document-list",
    },
};
