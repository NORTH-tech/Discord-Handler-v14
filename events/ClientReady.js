module.exports = async (client) => {
    //icon&name set
    const iconurl = await client.user.displayAvatarURL();
    const name = await client.user.username;
    global.boticon = iconurl;
    global.botname = name;

    client.user.setActivity({
        name: "xxxxxxxxxx"
    });

    console.log("Bot is now online!!!");
}