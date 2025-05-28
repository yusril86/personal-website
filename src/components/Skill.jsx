
import SkillCard from "./SkillCard";

const skillItem = [
{
imgSrc: '/images/figma.svg',
label: 'Figma',
desc: 'Design tool'
},
{
imgSrc: '/images/css3.svg',
label: 'CSS',
desc: 'User Interface'
},
{
imgSrc: '/images/javascript.svg',
label: 'JavaScript',
desc: 'Interaction'
},
{
imgSrc: '/images/kotlin.svg',
label: 'Kotlin',
desc: 'Mobile App Development'
},
{
imgSrc: '/images/docker.svg',
label: 'Docker',
desc: 'Containerization'
},
{
imgSrc: '/images/laravel.svg',
label: 'Laravel',
desc: ' Framework'
},
{
imgSrc: '/images/mysql.svg',
label: 'MySQL',
desc: 'Database'
},
{
imgSrc: '/images/react.svg',
label: 'React',
desc: 'Framework'
},

];


const Skill = () => {
return (
<section className="section">
    <div className="container">

        <h2 className="headline-2">Tech Stack I use</h2>
        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
            Discover the powerful tools and technologies I use to create exceptional, high-performing websites &
            applications.
        </p>

        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
            {skillItem.map(({imgSrc,label,desc },key) => (
                <SkillCard
                    key={key}
                    imgSrc={imgSrc}
                    label={label}
                    desc={desc}
                    classes="mb-8"
                />
            ))}
        </div>

    </div>
</section>
);
}

export default Skill;
