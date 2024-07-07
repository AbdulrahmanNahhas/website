"use client";

import { useEffect, useState } from "react";
import NumberTicker from "../ui/number-ticker";
import config from "@/config/config";

export const Statistics = () => {
  const [stars, setStars] = useState(0);
  const [forks, setForks] = useState(0);
  const [viewers, setViewers] = useState(0);

  const owner = config.github.owner;
  const repo = config.github.repo;
  
  // Fetch GitHub stars and forks only once when the component mounts
  useEffect(() => {
    const fetchRepoData = async () => {
      try {
        const response = await fetch(`https://api.github.com/repos/${owner}/${repo}`);
        if (response.ok) {
          const data = await response.json();
          setStars(data.stargazers_count);
          setForks(data.forks_count);
          setViewers(data.watchers_count);
        } else {
          console.error('Failed to fetch repository data');
        }
      } catch (error) {
        console.error('Error fetching repository data:', error);
      }
    };

    fetchRepoData();
  }, [owner, repo]); // Runs only once when the component mounts

  interface statsProps {
    quantity: number;
    description: string;
  }
  

  const stats: statsProps[] = [
    {
      quantity: viewers,
      description: "Viewers",
    },
    {
      quantity: forks,
      description: "Forks",
    },
    {
      quantity: stars,
      description: "Stars",
    },
  ];

  return (
    <section id="statistics">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map(({ quantity, description }: statsProps) => (
          <div
            key={description}
            className="space-y-2 text-center"
          >
            {quantity ? (
              <NumberTicker className="text-3xl sm:text-4xl font-bold" value={quantity}/>
            ): (
              <h2 className="text-3xl sm:text-4xl font-bold ">{quantity}</h2>
            )}
            <p className="text-xl text-muted-foreground">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};