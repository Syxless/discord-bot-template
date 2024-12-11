module.exports = {
    name: 'ready',
    once: true,
    async execute(client) {
        const statuses = [
            'Regarde la template de Syxles',
            'Merci d\'utiliser la template'
        ];
        
        let index = 0;

        setInterval(() => {
            client.user.setPresence({
                activities: [{ name: statuses[index], type: 0 }],
                status: 'online'
            });
            index = (index + 1) % statuses.length;
        }, 10000); // Change de statut toutes les 10 secondes

        const guild = client.guilds.cache.first();
        if (guild) {
            await guild.commands.set(
                client.commands.map(command => command.data)
            );
            console.log(`Connecté en tant que ${client.user.tag}`);
            console.log('Commandes enregistrées!');
        } else {
            console.log('Aucune guilde trouvée.');
        }
    }
};
