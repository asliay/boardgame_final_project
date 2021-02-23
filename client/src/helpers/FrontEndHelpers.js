  // Sorts the sorted games state when given a filter string from recommendations filter. 

  export const sortGames = (selectedFilter, boardGames, setSortedGames) => {

    let sorted = []
    const types = {
        minPlayersAsc   : 'minPlayers',
        maxPlayersAsc   : 'maxPlayers',
        playTimeAsc     : 'playTime',
        categoryAsc     : 'gameCategoryJoins[0].category.name',
        minPlayersDesc  : 'minPlayers', 
        maxPlayersDesc  : 'maxPlayers',
        playTimeDesc    : 'playTime'
    }
    if(selectedFilter === 'minPlayersAsc'|| selectedFilter === 'maxPlayersAsc'
      || selectedFilter === 'playTimeAsc' || selectedFilter === 'categoryAsc') {
        const sortProperty = types[selectedFilter];
        sorted = [...boardGames].sort((a, b) => a[sortProperty] - b[sortProperty]);
    } else if (selectedFilter === 'minPlayersDesc'|| selectedFilter === 'maxPlayersDesc' 
              || selectedFilter === 'playTimeDesc') {
        const sortProperty = types[selectedFilter];
        sorted = [...boardGames].sort((a, b) => b[sortProperty] - a[sortProperty]);
    } else if (!selectedFilter) {
      return
    }
    setSortedGames(sorted);

  }