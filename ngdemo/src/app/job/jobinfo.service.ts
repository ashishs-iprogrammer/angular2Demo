import { Injectable } from '@angular/core';

@Injectable()
export class JobinfoService {
jobInfo : any ='';
  constructor() { }
  
  /*Method to get the job details
   *@params id(integer)
   *return JSON (Array)
   */
  getJobInfoById(id:number)
  {
     this.jobInfo={
	"job_title": "Front End Developer",
	"expiry_date": "",
	"is_closed": 1,
	"employer_info": {
		"name": "Shortlist",
		"city": "Hyderabad",
		"site_url": "https://www.shortlist.net/",
		"company_desc": '<p class="text-center"><p><span></span></p><p class="MsoListParagraph"><span>Shortlist is on a mission to unlock professional potential. We are a global technology start-up that is transforming the way small businesses hire. Our solution combines the best of technology, analytics and the human touch.<span> <br></span></span></p><p class="MsoListParagraph"><span><span>Talent might be evenly distributed, but opportunity is not. Shortlist takes pride in its team of professionals from diverse backgrounds who&nbsp; are all unified in their passion to help YOU unlock your professional potential.</span></span><!--EndFragment--><br><span><span><span></span></span></span></p><p><span><span><span>The resume is dead, long live your career</span>!</span><br></span></p></p>',
		"video_gallary": [{
			"video_url": "sfs",
			"video_desc": "sdf",
			"is_active": "sdf"
		}],
		"image_gallary": [{
			"image_url": "sfs",
			"image_desc": "sdf",
			"is_active": "sdf"
		}],
		"more_info": '<p><p><span><span>With world class resources at our disposal, we have set out to discover, evaluate, inform and place talent. If you want to be one of the people who love their work, sign up at shortlist.net.</span></span></p><p ><span></span></p><p><span><span>For companies that are hiring, our platform sources and screens quality candidates, offering a "Shortlist" of multi-dimensional and <br>vetted profiles for a given opening. At Shortlist we focus on the skills and attributes a candidate demonstrates for the role, NOT their resume! For our candidates, we deliver a massively improved application experience with feedback along the way and transparency throughout.</span><br></span></p><p ><span>We celebrate and seek out diversity of opinion on our team, we’re open to bold and disruptive ideas, and acknowledge and appreciate each other. We trust each other and live whole lives. We always strive for excellence and for the best solution, which is ultimately determined by the customer need. We believe in our product and we would use it ourselves.<br></span></p></p>',
	},
	"job_description":  "<p>Do you believe that traditional approaches to placement are ineffective and time consuming? That the whole process has become frustrating for employers and de-moralizing for job seekers? Are you passionate about unlocking professional potential?</p><p>Shortlist, a funded recruiting technology startup, is looking for a highly motivated, strategic, and self-driven individual to join the team as a UI Engineer. You will be plugging in right-away, leading the UI development efforts at Shortlist, ensuring a world-class user experience for job seekers, employers, and internal users of the platform. Needless to say you will enjoy working closely with our highly motivated and cross continental business team. </p><p><b>Salary is highly competitive and based on previous experience and subject to customary increases on joining.</b></p>",
	"desired_candidate_profile": [
		"Bachelors or Master’s Degree in Computer Science or related field",
		"3 to 5 years of experience developing cross browser compatible code for responsive websites",
		"Robust project planning/execution skills including estimating, scheduling, and executing on committed schedules"
	],
	"key_highlights": [
		"Under Graduate : B.Tech/B.E.",
		"Post Graduate : Not Required",
		"Industry : IT | Information Technology and Services",
		"Function : IT Software"
	]
};
    return this.jobInfo;
  }

}
