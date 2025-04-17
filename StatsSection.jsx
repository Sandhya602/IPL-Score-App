"use client"
import {motio} from "framer-motio";
import {Users,Trophy,Calendar,TrendingUp} from "lucide-react";
export default function StatsSection() {
  const stats=[
    {icon:Users,title:"Total Matches",value:"74"},
    {icon:Trophy,title:"Team",value:"10"},
    {icon:Calendar,title:"Tournament Duration",value:"51 days"},
    {icon:TrendingUp,title:"Highest Score",value:"246/7"},
  ];
  return(
    <div className="py-16 bg-gradient-to-r from-blu-600 to red-600 text-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3x1 font-bold text-center mb-12"
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{duration:0.5}}>
               IPL 2025 Stats and HighLights
        </motion.h2>
      </div>
    </div>
  }
