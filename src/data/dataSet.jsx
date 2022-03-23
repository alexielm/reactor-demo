import reactor from "../framework/reactor";

export const dataSet = {
    users: [
        {
            userId: 100,
            firstName: "Dan",
            lastName: "Espinoza"
        },
        {
            userId: 110,
            firstName: "Lucifer",
            lastName: "Morningside"
        },
        {
            userId: 120,
            firstName: "Chloe",
            lastName: "Decker"
        },
        {
            userId: 130,
            firstName: "Ella",
            lastName: "Lopez"
        }
    ],
    comments: [
        {
            userId: 100,
            title: "Arcu felis bibendum ut tristique et egestas quis ipsum.",
            body: "Enenatis tellus in metus vulputate eu. Turpis egestas pretium aenean pharetra magna ac placerat. Proin fermentum leo vel orci porta non pulvinar neque. Sit amet massa vitae tortor condimentum lacinia quis. Turpis egestas maecenas pharetra convallis posuere morbi. Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur."
        },
        {
            userId: 100,
            title: "latea dictumst quisque sagittis purus sit.",
            body: "Massa sed elementum tempus egestas sed sed risus. Leo urna molestie at elementum eu facilisis sed odio. Enim tortor at auctor urna nunc id cursus metus. Tortor pretium viverra suspendisse potenti nullam ac. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Hac habitasse platea dictumst vestibulum."
        },
        {
            userId: 100,
            title: "Nullam eget felis eget nunc lobortis.",
            body: "Faucibus interdum posuere lorem ipsum dolor sit amet consectetur. Ultricies leo integer malesuada nunc vel risus commodo. Enim blandit volutpat maecenas volutpat blandit aliquam. In hendrerit gravida rutrum quisque non tellus orci. Egestas integer eget aliquet nibh praesent tristique."
        },
        {
            userId: 110,
            title: "Eros donec ac odio tempor orci dapibus ultrices in.",
            body: "Amet est placerat in egestas erat imperdiet sed euismod nisi. Quam nulla porttitor massa id. Sit amet est placerat in egestas erat imperdiet sed euismod."
        },
        {
            userId: 110,
            title: "Purus sit amet volutpat consequat mauris nunc congue.",
            body: "Vel fringilla est ullamcorper eget nulla facilisi etiam. Diam donec adipiscing tristique risus nec feugiat in. Semper viverra nam libero justo laoreet sit."
        },
        {
            userId: 120,
            title: "Odio pellentesque diam volutpat commodo sed egestas.",
            body: "Odio facilisis mauris sit amet massa vitae tortor. Enim blandit volutpat maecenas volutpat blandit. Ridiculus mus mauris vitae ultricies. Sollicitudin nibh sit amet commodo. In iaculis nunc sed augue."
        },
        {
            userId: 120,
            title: "Elementum sagittis vitae et leo duis ut diam.",
            body: "Etiam dignissim diam quis enim lobortis. Enim nec dui nunc mattis. Blandit turpis cursus in hac habitasse. In massa tempor nec feugiat. Vitae tempus quam pellentesque nec nam aliquam. Eu mi bibendum neque egestas."
        },
        {
            userId: 120,
            title: "Nulla porttitor massa id neque aliquam vestibulum. ",
            body: "A scelerisque purus semper eget duis. Iaculis at erat pellentesque adipiscing commodo elit."
        },
        {
            userId: 120,
            title: "Phasellus vestibulum lorem sed risus ultricies tristique nulla. ",
            body: "ed viverra ipsum nunc aliquet bibendum enim. Semper auctor neque vitae tempus quam pellentesque nec nam. Metus dictum at tempor commodo ullamcorper a lacus vestibulum sed. Venenatis urna cursus eget nunc."
        },
        {
            userId: 130,
            title: "Nec feugiat in fermentum posuere urna nec tincidunt praesent. ",
            body: "Habitant morbi tristique senectus et. Sed lectus vestibulum mattis ullamcorper velit sed. Sed arcu non odio euismod lacinia at. Nulla facilisi morbi tempus iaculis urna."
        },
        {
            userId: 130,
            title: "Interdum varius sit amet mattis vulputate enim nulla aliquet. ",
            body: "Odio pellentesque diam volutpat commodo sed. Interdum varius sit amet mattis vulputate enim nulla aliquet. Nibh mauris cursus mattis molestie a iaculis."
        },
        {
            userId: 130,
            title: "Sed felis eget velit aliquet sagittis id consectetur. ",
            body: "Adipiscing commodo elit at imperdiet dui accumsan. Vitae proin sagittis nisl rhoncus mattis rhoncus urna. At varius vel pharetra vel turpis nunc."
        },
        {
            userId: 130,
            title: "A pellentesque sit amet porttitor eget dolor.",
            body: "Dignissim sodales ut eu sem. Dui nunc mattis enim ut tellus elementum sagittis vitae et. Egestas sed sed risus pretium quam vulputate dignissim."
        }
    ]
};

export const forumData = new reactor(dataSet);
