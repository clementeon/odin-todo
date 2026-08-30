function generateDefaultData(projectManager) {
    projectManager.createProject("School");
    projectManager.createProject("Personal");
    projectManager.createProject("Work");

    const school = projectManager.projects[0];
    const personal = projectManager.projects[1];
    const work = projectManager.projects[2];

    school.createTodo({
        title: "Finish math assignment",
        note: "Complete questions 1-10",
        date: "2026-08-20T18:00",
        priority: true
    });

    school.createTodo({
        title: "Review lecture notes",
        note: "Go over this week's material",
        date: "2026-08-21T15:00",
        priority: false
    });

    school.createTodo({
        title: "Study for quiz",
        note: "Review chapters 3 and 4",
        date: "2026-08-22T12:00",
        priority: true
    });

    school.createTodo({
        title: "Read textbook",
        note: "Read pages 120-145",
        date: "2026-08-23T20:00",
        priority: false
    });

    school.createTodo({
        title: "Work on project",
        note: "Finish the first section",
        date: "2026-08-25T17:00",
        priority: false
    });


    personal.createTodo({
        title: "Go grocery shopping",
        note: "Milk, eggs, bread, vegetables",
        date: "2026-08-19T17:00",
        priority: true
    });

    personal.createTodo({
        title: "Clean room",
        note: "",
        date: "2026-08-20T14:00",
        priority: false
    });

    personal.createTodo({
        title: "Go to the gym",
        note: "Upper body workout",
        date: "2026-08-21T18:00",
        priority: false
    });

    personal.createTodo({
        title: "Call friend",
        note: "",
        date: "2026-08-22T19:00",
        priority: false
    });

    personal.createTodo({
        title: "Plan weekend",
        note: "Figure out plans for Saturday",
        date: "2026-08-22T21:00",
        priority: false
    });


    work.createTodo({
        title: "Finish report",
        note: "Complete the final section",
        date: "2026-08-19T17:00",
        priority: true
    });

    work.createTodo({
        title: "Reply to emails",
        note: "Respond to outstanding messages",
        date: "2026-08-19T12:00",
        priority: false
    });

    work.createTodo({
        title: "Team meeting",
        note: "Weekly team meeting",
        date: "2026-08-20T10:00",
        priority: false
    });

    work.createTodo({
        title: "Update documentation",
        note: "Add the new features",
        date: "2026-08-23T16:00",
        priority: false
    });

    work.createTodo({
        title: "Plan next sprint",
        note: "Prepare tasks for next week",
        date: "2026-08-24T15:00",
        priority: true
    });
}

export { generateDefaultData };