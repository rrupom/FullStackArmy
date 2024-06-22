import "./App2.css";

const tasks = [
  {
    id: "unique_id_001",
    subtitle: "Subtitle",
    createdAt: "2023-12-01T04:46:07.842Z",
    tags: [
      {
        id: "tag-id-001",
        text: "It's done",
        icon: "T",
      },
      {
        id: "tag-id-002",
        text: "It's cancelled",
        icon: "X",
      },
      {
        id: "tag-id-003",
        text: "It's in progress",
        icon: "P",
      },
      {
        id: "tag-id-004",
        text: "Just wrote it",
        icon: "C",
      },
    ],
    comments: [
      {
        id: "comment-id-001",
        user: {
          avatar: "xyz.com",
          name: "Viraj",
          id: "user-id-001",
        },
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi magnam quod nemo, numquam nihil aperiam ea dolore assumenda molestias modi.",
      },
    ],
    tasks: [
      {
        id: "task-id-001",
        title: "Foggy Nelson",
        text: "Here to clean the streets of Hells kitchen",
        status: "done",
      },
      {
        id: "task-id-002",
        title: "Louls CK",
        text: "This one is cancelled",
        status: "cancelled",
      },
      {
        id: "task-id-003",
        title: "Albert Einstein",
        text: "In progress",
        status: "In progress",
      },
      {
        id: "task-id-004",
        title: "Albert Einstein",
        text: "In progress",
        status: "In progress",
      },
    ],
  },
  {
    id: "unique_id_001",
    subtitle: "Subtitle",
    createdAt: "2023-12-01T04:46:07.842Z",
    tags: [
      {
        id: "tag-id-001",
        text: "It's done",
        icon: "T",
      },
      {
        id: "tag-id-002",
        text: "It's cancelled",
        icon: "X",
      },
      {
        id: "tag-id-003",
        text: "It's in progress",
        icon: "P",
      },
      {
        id: "tag-id-004",
        text: "Just wrote it",
        icon: "C",
      },
    ],
    comments: [
      {
        id: "comment-id-001",
        user: {
          avatar: "xyz.com",
          name: "Viraj",
          id: "user-id-001",
        },
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi magnam quod nemo, numquam nihil aperiam ea dolore assumenda molestias modi.",
      },
    ],
    tasks: [
      {
        id: "task-id-001",
        title: "Foggy Nelson",
        text: "Here to clean the streets of Hells kitchen",
        status: "done",
      },
      {
        id: "task-id-002",
        title: "Louls CK",
        text: "This one is cancelled",
        status: "cancelled",
      },
      {
        id: "task-id-003",
        title: "Albert Einstein",
        text: "In progress",
        status: "In progress",
      },
      {
        id: "task-id-004",
        title: "Albert Einstein",
        text: "In progress",
        status: "In progress",
      },
    ],
  },
];

const TagListItem = ({ tag }) => {
  return (
    <li>
      <small>{tag.icon}</small> - {tag.text}
    </li>
  );
};

const CommentListItem = ({ comment }) => {
  return (
    <div key={comment.id} className="comment-item">
      <h3>{comment.user.name}</h3>
      <p>{comment.text}</p>
    </div>
  );
};

const TaskListItem = ({ task }) => {
  return (
    <li key={task.id}>
      <h3>{task.title}</h3>
      <p>
        <small>{task.status}</small>
      </p>
      <p>{task.text}</p>
    </li>
  );
};

const TaskCard = ({ task }) => {
  return (
    <div className="day-card">
      <h1 className="title">
        {getDay(task.createdAt)}, {formatDate(task.createdAt)}
      </h1>
      <h3 className="sub-title">{task.subtitle}</h3>
      <ul className="tag-ul">
        {task.tags.map((tag) => (
          <TagListItem key={tag.id} tag={tag} />
        ))}
      </ul>
      <div className="line" />
      <p className="notes">Notes Linked to people</p>
      <div className="comments">
        {task.comments.map((comment) => (
          <CommentListItem key={comment.id} comment={comment} />
        ))}
      </div>
      <ul className="tasks">
        {task.tasks.map((task) => (
          <TaskListItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
};

const App2 = () => {
  return (
    <div className="container">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
};

function getDay(dateStr) {
  const date = new Date(dateStr).getDay();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
  ];

  return days[date];
}

function formatDate(dateStr) {
  const date = new Date(dateStr);

  return `${date.getDay()}/${date.getMonth() + 1}/${date.getFullYear()}`;
}

export default App2;
