
import Projectcard from "./Projectcard";

const works = [
    {
      imgSrc: '/images/image-porto1.png',
      title: 'Sampan Institute',
      tags: ['Fullstack', 'MVC', 'Website'],
      projectLink: 'https://sampaninstitute.com/'
    },
    {
      imgSrc: '/images/image-porto2.png',
      title: 'FK-MPM Parepare',
      tags: ['API', 'Mobile App', ],
      projectLink: 'https://play.google.com/store/apps/details?id=com.makkode.fkmpm.parepare&hl=in'
    },
    {
      imgSrc: '/images/image-porto3.png',
      title: 'Sipato Kemenag Sidrap',
      tags: ['Fullstack', 'Website', 'MVC'],
      projectLink: 'https://sidrap.kemenag.go.id/'
    },
    {
      imgSrc: '/images/image-porto4.png',
      title: 'Absensi RSUD Andi Makkasau App',
      tags: ['Website', 'API', 'Mobile App', 'Fullstack'],
      projectLink: 'https://play.google.com/store/apps/details?id=pde.rsudandimakkasau.absensiapp'
    },
    {
      imgSrc: '/images/image-porto5.png',
      title: 'Maunikah Digital Invitation',
      tags: ['Prouduct','Website', 'Digital Invitation', 'Fullstack'],
      projectLink: 'https://maunikah.fun/'
    },
    {
      imgSrc: '/images/image-porto6.png',
      title: 'Teh Poci Thir',
      tags: ['Web-design', 'Development'],
      projectLink: 'https://tehpocithir.store/'
    },
  ];
  

const Work = () => {
return (
    <section id="work" className="section">
        <div className="container">
            <h2 className="headline-2 mb-2">
                My Portofolio Highligts
            </h2>

            <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                {works.map(({imgSrc, title, tags, projectLink},key) => (
                    <Projectcard 
                        key={key}
                        imgSrc={imgSrc} 
                        title={title} 
                        tags={tags} 
                        projectLink={projectLink} 
                    />
                ))}
                    
            
            </div>
        </div>
    </section>
);
}
export default Work;