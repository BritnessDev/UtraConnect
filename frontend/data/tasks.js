export default {
  items: {
    'item-1': {
      id: 'item-1',
      content: `🤚 Drag me around to move me within this list of between lists.`,
    },
    'item-2': {
      id: 'item-2',
      content: `👆 Click me to open a modal that shows all the description, comments, files, and activity associated with this card.`,
    },
    'item-3': {
      id: 'item-3',
      content: `🐣 Click me to see that same modal, but for a task that is brand new and doesn't have activity or files.`,
    },
    'item-4': {
      id: 'item-4',
      content: `👇 Click "Add Card" at the bottom of this column to see what creating a new card looks like. You can even add a date.`,
    },
    'item-5': {
      id: 'item-5',
      content: `👉 Click "Add List" past the last column on the right to see what it looks like to name a new column.`,
    },
    'item-6': {
      id: 'item-6',
      content: `⚙️ Click the grid/list toggle in the top right of this page to see what these tasks look like organized as a draggable list!`,
    },
    'item-7': {
      id: 'item-7',
      content: `Create the release notes for the new pages so customers are aware.`,
      date: '2020-06-09',
      users: [
        {
          imgSrc: '/img/avatars/profiles/avatar-2.jpg',
          title: 'Ab Hadley',
        },
      ],
    },
    'item-8': {
      id: 'item-8',
      imgSrc: '/img/kanban/kanban-2.jpg',
      content: `Finish the design for blog listings and articles, including mixed media`,
      comments: '23',
      date: '2020-09-09',
      users: [
        {
          imgSrc: '/img/avatars/profiles/avatar-2.jpg',
          title: 'Ab Hardley',
        },
        {
          imgSrc: '/img/avatars/profiles/avatar-3.jpg',
          title: 'Adolfo Hess',
        },
        {
          imgSrc: '/img/avatars/profiles/avatar-4.jpg',
          title: 'Daniela Dewitt',
        },
      ],
    },
    'item-9': {
      id: 'item-9',
      content: `Review all the indentation changes to be sure they will resolve all customer issues`,
      status: 'Reviewed',
    },
    'item-10': {
      id: 'item-10',
      content: `Review all the indentation changes to be sure they will resolve all customer issues`,
      date: '2020-06-11',
      users: [
        {
          imgSrc: '/img/avatars/profiles/avatar-4.jpg',
          title: 'Miya Miles',
        },
      ],
    },
    'item-11': {
      id: 'item-11',
      content: `Design portfolio pages and a case study focused page`,
      date: '2020-06-06',
      users: [
        {
          imgSrc: '/img/avatars/profiles/avatar-6.jpg',
          title: 'Ryu Duke',
        },
      ],
    },
    'item-12': {
      id: 'item-12',
      content: `Create a screenshot component extension for highlighting hotspots with popover hovers`,
    },
    'item-13': {
      id: 'item-13',
      imgSrc: '/img/kanban/kanban-1.jpg',
      content: `Include an even larger library of illustrations that we can provide in SVG that cover more use cases`,
      comments: '23',
      date: '2020-09-09',
      users: [
        {
          imgSrc: '/img/avatars/profiles/avatar-2.jpg',
          title: 'Ab Hadley',
        },
        {
          imgSrc: '/img/avatars/profiles/avatar-3.jpg',
          title: 'Adolfo Hess',
        },
        {
          imgSrc: '/img/avatars/profiles/avatar-4.jpg',
          title: 'Daniela Dewitt',
        },
      ],
    },
    'item-14': {
      id: 'item-`14',
      content: `Create basic auth pages (login, sign up, forgot password) even though we don't have any settings yet`,
    },
    'item-15': {
      id: 'item-15',
      content: `Code up the utility pages for basic errors and failure states`,
      date: '2020-06-12',
      users: [
        {
          imgSrc: '/img/avatars/profiles/avatar-3.jpg',
          title: 'Adolfo Hess',
        },
      ],
    },
    'item-16': {
      id: 'item-16',
      content: `Create the release notes for the new pages so customers are aware.`,
      date: '2020-06-09',
      users: [
        {
          imgSrc: '/img/avatars/profiles/avatar-2.jpg',
          title: 'Ab Hadley',
        },
      ],
    },
    'item-17': {
      id: 'item-17',
      imgSrc: '/img/kanban/kanban-2.jpg',
      content: `Finish the design for blog listings and articles, including mixed media`,
      comments: '23',
      date: '2020-09-09',
      users: [
        {
          imgSrc: '/img/avatars/profiles/avatar-2.jpg',
          title: 'Ab Hadley',
        },
        {
          imgSrc: '/img/avatars/profiles/avatar-3.jpg',
          title: 'Adolfo Hess',
        },
        {
          imgSrc: '/img/avatars/profiles/avatar-4.jpg',
          title: 'Daniela Dewitt',
        },
      ],
    },
    'item-18': {
      id: 'item-18',
      content: `Clear all the deprecation warnings for out of date NPM packages`,
      status: 'Reviewed',
    },
    'item-19': {
      id: 'item-19',
      content: `Review all the indentation changes to be sure they will resolve all customer issues`,
      date: '2020-06-11',
      users: [
        {
          imgSrc: '/img/avatars/profiles/avatar-5.jpg',
          title: 'Miya Miles',
        },
      ],
    },
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'How to Use Kanban',
      itemIds: ['item-1', 'item-2', 'item-3', 'item-4', 'item-5', 'item-6'],
    },
    'column-2': {
      id: 'column-2',
      title: 'Release 1.1.0',
      itemIds: ['item-7', 'item-8', 'item-9', 'item-10'],
    },
    'column-3': {
      id: 'column-3',
      title: 'Next Up',
      itemIds: ['item-11', 'item-12', 'item-13', 'item-14', 'item-15'],
    },
    'column-4': {
      id: 'column-4',
      title: 'Release 1.1.0',
      itemIds: ['item-16', 'item-17', 'item-18', 'item-19'],
    },
  },
  columnOrder: ['column-1', 'column-2', 'column-3', 'column-4'],
};
