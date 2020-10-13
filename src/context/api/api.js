import jobs from "./data/data.json";

export async function fetchData(sorts) {
  try {
    let data = await jobs;
    
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!sorts || sorts.length === 0) {
          resolve(data);
        } else {
          let sortedData = [];
          sortedData = data.filter((job) => {
            let features = [
              job.role,
              job.level,
              ...(job.languages || []),
              ...(job.tools || []),
            ];
            return sorts.reduce(
              (acc, d) => acc && features.indexOf(d) >= 0,
              true
            );
          });
          resolve(sortedData);
        }
      }, 100);
    });
  } catch (error) {
    console.error(error);
  }
}
