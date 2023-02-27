export const getTimeSinceOrderPlaced = (purchaseDate) => {
    const currentTime = new Date();
    const elapsedTimeInSeconds = Math.floor((currentTime - new Date(purchaseDate)) / 1000);
  
    if (elapsedTimeInSeconds < 60) {
      return `${elapsedTimeInSeconds} seconds ago`;
    } else if (elapsedTimeInSeconds < 3600) {
      const elapsedTimeInMinutes = Math.floor(elapsedTimeInSeconds / 60);
      return `${elapsedTimeInMinutes} minutes ago`;
    } else if (elapsedTimeInSeconds < 86400) {
      const elapsedTimeInHours = Math.floor(elapsedTimeInSeconds / 3600);
      return `${elapsedTimeInHours} hours ago`;
    } else {
      const elapsedTimeInDays = Math.floor(elapsedTimeInSeconds / 86400);
      return `${elapsedTimeInDays} days ago`;
    }
  };
  
  

