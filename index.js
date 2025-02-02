document.addEventListener('DOMContentLoaded', ()=> {
    const enlaceSobreMi = document.getElementById('sobre-mi');
    const enlaceCurriculum = document.getElementById('curriculum');
    const enlacePortfolio = document.getElementById('portfolio');

    const sectionSobreMi = document.querySelector('.sobre-mi');
    const sectionCurriculum = document.querySelector('.curriculum');
    const sectionPortfolio = document.querySelector('.portfolio');

    sectionSobreMi.style.display = 'flex';
    sectionCurriculum.style.display = 'none';
    sectionPortfolio.style.display = 'none';

    enlaceSobreMi.addEventListener('click', function() {

        sectionSobreMi.style.display = 'flex';
        sectionCurriculum.style.display = 'none';
        sectionPortfolio.style.display = 'none';

        enlaceSobreMi.classList.add('active');
        enlaceCurriculum.classList.remove('active');
        enlacePortfolio.classList.remove('active');
    });

    enlaceCurriculum.addEventListener('click', function() {

        sectionSobreMi.style.display = 'none';
        sectionCurriculum.style.display = 'flex';
        sectionPortfolio.style.display = 'none';

        enlaceSobreMi.classList.remove('active');
        enlaceCurriculum.classList.add('active');
        enlacePortfolio.classList.remove('active');
    });

    enlacePortfolio.addEventListener('click', function() {

        sectionSobreMi.style.display = 'none';
        sectionCurriculum.style.display = 'none';
        sectionPortfolio.style.display = 'flex';

        enlaceSobreMi.classList.remove('active');
        enlaceCurriculum.classList.remove('active');
        enlacePortfolio.classList.add('active');
    });
}
);