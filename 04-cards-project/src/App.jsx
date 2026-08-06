import { Bookmark } from "lucide-react";
import Card from "./Components/Card";

const App = () => {
  const job = [
  {
    brandLogo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/google.svg",
    company: "Google",
    datePosted: "2 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$52/hr",
    location: "Bangalore, India",
  },
  {
    brandLogo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/microsoft.svg",
    company: "Microsoft",
    datePosted: "5 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$58/hr",
    location: "Hyderabad, India",
  },
  {
    brandLogo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/apple.svg",
    company: "Apple",
    datePosted: "1 week ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$72/hr",
    location: "Cupertino, USA",
  },
  {
    brandLogo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/meta.svg",
    company: "Meta",
    datePosted: "3 days ago",
    post: "React Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$48/hr",
    location: "London, UK",
  },
  {
    brandLogo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/amazon.svg",
    company: "Amazon",
    datePosted: "2 weeks ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$60/hr",
    location: "Seattle, USA",
  },
  {
    brandLogo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/netflix.svg",
    company: "Netflix",
    datePosted: "6 days ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$78/hr",
    location: "Los Gatos, USA",
  },
  {
    brandLogo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/nvidia.svg",
    company: "NVIDIA",
    datePosted: "10 days ago",
    post: "AI Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$82/hr",
    location: "Santa Clara, USA",
  },
  {
    brandLogo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/adobe.svg",
    company: "Adobe",
    datePosted: "4 weeks ago",
    post: "UI Engineer",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: "$55/hr",
    location: "Noida, India",
  },
  {
    brandLogo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/salesforce.svg",
    company: "Salesforce",
    datePosted: "8 days ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$57/hr",
    location: "Pune, India",
  },
  {
    brandLogo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/oracle.svg",
    company: "Oracle",
    datePosted: "10 weeks ago",
    post: "Java Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$54/hr",
    location: "Mumbai, India",
  },
];
console.log(job);
  
  return (

      <div className="parent">
        {job.map(function(elem,idx){
          return <div key={idx}>
            <Card company={elem.company} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} datePosted={elem.datePosted} brandLogo={elem.brandLogo} pay={elem.pay} location={elem.location} />
          </div>
        })}
        
      </div> 
  )
}

export default App