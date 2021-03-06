let id_sheet_dict = {
    // 'Actuarial Mathematics': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSfAG6brfcxc9SKUZZwmnMgbkGE7FEo0EASnVGVGCg1VB1kq1OFuakF8OB0o2HmaLHnPYSLwKLHyC-p/pub?output=csv',
    'Aerospace Engineering': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSDikLE1mDZDS7XKswrKDBSQSbQU12ncogYMAzow8badA6jeo75FhYkEtNQCq9wIm8XepI6mS6KS6aR/pub?output=csv',
    // 'Applied Physics',
    // 'Architectural Engineering': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRgfHuigZ8ctu0T2D5EsFuOzeMh0LfbGdTei9-JEGeNSdfacNii5hxUv2EUOnOx2oeinOyaQf50JJ-U/pub?output=csv',
    'Biochemistry': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSotRjs1WfdILbu56pSPAwQt-5ma-APnRtKrpoyO1Rpe9yDco2FOUlPbc8vS3_iOx5QaO5t3Sp94BF2/pub?output=csv',
    // 'Bioinformatics and Computational Biology': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSu_ZvPIjQKJn1bsj4c-BKieSFx1Vn1Q1WfA9o2UXEx98XBpk5FZMII3jRDrGW3iAd8-LuvV9_wlpxy/pub?output=csv',
    'Biology and Biotechnology': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQmGws2_cTDwHEzVL2GqoET1CWL84N_4Vi5QM8IMDOy46RJPeHpvH1G_odpq_Enr8RP4-EyQxG3RP4c/pub?output=csv',
    'Biomedical Engineering': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS7KcOGsh-1pKVWEDxSJQNEsisSIjgnagHwHTdDnAapnOh8ztms_71SO_g7Mf7vDwtyfjWeIGZndYYL/pub?output=csv',
    // 'Business': '',
    'Chemical Engineering': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vShgnO8kVcnCARPip4qo7jm7Wy8E3W0ZKwNltfbCu_2dkq1CsFYFseBGiPODLkpQgpans1BYu-aAq-k/pub?output=csv',
    // 'Chemistry': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQVtXc8MSW5JnBypwiwOOuDLsORmh2rXkqb3qY-u-YcFlUsrvgQ0WrR6XgWgE8LJmj6tXdxcFE4_yII/pub?output=csv',
    'Civil Engineering': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTu6yUUryY6MGBKnqkpl8Wexz8os-Z_3hjP-aTyggKVhssDLVk28wrOqdsbaejc9vLlEgOeTWgJL1Zb/pub?output=csv',
    'Computer Science': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQXUptmaCRUGRls1fC88xYU9G5Dp6gEn_9CuHA-q2LYcP7Wcqn9xkxTsiVSAX33zCgiRyno-fUbmhwa/pub?output=csv',
    // 'Economic Science': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTTvDbhmE87IDVL24B4FNaEw2GiNoHXpCawHp5UJa-48LqBCDB6hzhRqgmbKqf0ro3XZX7UatMhHGOG/pub?output=csv',
    'Electrical and Computer Engineering': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRbCB7D38KJxKJzOxOuNPXSshCj7rzJ9tU_AOGQjhWmt-TvEIoAGXUEGY-Xt5tckLNYeCJuHya25IzO/pub?output=csv',
    // 'Environmental and Sustainability Studies': '',
    'Environmental Engineering': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRv-AXLjiMhY1p8EB1fRkL-khrpu2NB53K8wo60RQ7dUXcVoDwSSk4gRwEEs7ZDHUaoixUzEMdtZ_Py/pub?output=csv',
    'Humanities and Arts': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSK9pq6XgDnYuNAO42bLmvyolMqg-PxC01JHB3KoJKS8aGSn9KpdeCbkJjmeK3ZXcPhE9PxUjU0A4yU/pub?output=csv',
    'Industrial Engineering': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTSNQvVx7YPWda8tlO774Vh6ez2Eg4_lyyYBI6wwrbbZmMp0LMDGddQH5eKQFYNH1tN63hr8akNAsyW/pub?output=csv',
    'Interactive Media and Game Development': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSXerIo_n7eYlkxf4Ievo-CFBOROZwALnHgzF8FTiVMN2z3DenCbhaQB2zKCmuEidPcYf8EWsYNxm9y/pub?output=csv',
    // 'Interdisciplinary Data Science': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSlFhU9a_ulOLU7zLe5HyiQxp2xlMIok9YxxKZ9MBJ0vfYwj0025i-cj_8iX0CSdJOhWmCAkb_f7QcN/pub?output=csv',
    // 'International and Global Studies': '',
    'Liberal Arts and Engineering': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSAdC7x1Pga2spCW0oFaEJIFVEe5py1rCPb7_NgSKpohnhy-KVtdxwtpo3Mfzn10Wy-qWfyRpEW20O9/pub?output=csv',
    // 'Management Engineering': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSzHoHsPxazokuQiRjfCcLxsYpDKS9pJzY91xgfRYvEQGk9jL6T23YcMgkeb5REQYBsga_A8RxAFZG8/pub?output=csv',
    // 'Management Information Systems': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTd9ufrLmRs4wafyLtKAWThLmjvABBazF_2P3K_zTIl6FavRN4XNd7ZwpZxKN12buGc-qeCEvbg0Imr/pub?output=csv',
    'Mathematical Sciences': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQAGz6RpLDGwMc0CW2lir-4QFrWx6n6hKB0it6e0LvrRq_3QyLa1V6CCNeu_nP9dU3lqLJOpZHLl10R/pub?output=csv',
    'Mechanical Engineering': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTOPWO1m8yDLMejjSzkuM3rKizNG0dzLy1mX3sIZ3j9Vgf_jwHBElRnw2CYLPpJAvki1p3vWbu7cqoi/pub?output=csv',
    // 'Mechanical Engineering': '../csvs/Mechanical Engineering.csv',
    // 'Physics': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSdiDybZOPhVwF-HJJEw7Put83iMaac4Yiy1XXFSdkI059y-i7j_4bF_k_HQ-ap4ubr9hyJstauvbcz/pub?output=csv',
    'Professional Writing': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQDa1FCNLlI3urV_dM7Qio-DYjN_pTqDu0k0Xcc4YCmUIdU45jHL4wgqJd3bQMRKZCz4X1ebHbeIuZS/pub?output=csv',
    'Psychological Science': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS4lZegSjUC38liJj3KcF74UJBMOdSrynM9NZxVhW6wwe67VK6XUPbJ1p4kDvK2trGuxAKYl14FUINT/pub?output=csv',
    'Robotics Engineering': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQeXSYadejQSlVMN-C3rcD5VCDBqG9YdF55NFAMvSK0QDQ4gnsKMRlErB3EHXn8kzRQxGW6WDNSNTv2/pub?output=csv',
    'Society, Technology, and Policy': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTBVfQdvJK8iIvxM8h3N7nUITYQ9jNwbHJDtiSkvqb3bXkPgeNs7Kh7mP3FNh4h5_CG-QNY6I8woS7I/pub?output=csv'
    // 'Z Sample': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTF-eItKvpFsBhUK_3hM2ihYr3Yi34IgvxSAK_Pw6L8GGODkalJ5uFKidrDTLfC8uaZ5nNtI98Wb-tz/pub?output=csv'
};

let temp_video = '<div style="position: relative; padding-bottom: 56.25%; padding-top: 0px; height: 0; overflow: auto; -webkit-overflow-scrolling: touch;"><iframe id="ensembleEmbeddedContent_a_OxzZc3K0qtTJRKjRjabQ" src="https://video.wpi.edu/hapi/v1/contents/cdb1f36b-3797-4a2b-ad4c-944a8d18da6d/plugin?embedAsThumbnail=false&displayTitle=false&startTime=0&autoPlay=false&hideControls=true&showCaptions=false&displaySharing=false&displayAnnotations=false&displayAttachments=false&displayLinks=false&displayEmbedCode=false&displayDownloadIcon=false&displayMetaData=false&displayCredits=false&audioPreviewImage=false&displayCaptionSearch=false&displayViewersReport=false&displayAxdxs=false" title="Test Video" frameborder="0" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" scrolling="no" allowfullscreen></iframe></div>'
let temp_slides = '<iframe src="https://onedrive.live.com/embed?cid=79B772C1E1351D3E&amp;resid=79B772C1E1351D3E%21130&amp;authkey=AHGdc_WwEorlx0o&amp;em=2&amp;wdAr=1.7777777777777777" width="350px" height="221px" frameborder="0">This is an embedded <a target="_blank" href="https://office.com">Microsoft Office</a> presentation, powered by <a target="_blank" href="https://office.com/webapps">Office</a>.</iframe>';

/**
 * Loads header of site - that is, the top part of the page which remains the same in each page
 * @param is_firstpage boolean showing whether the function is being called from the first page (the one with the department tiles)
 * @param add_sorting boolean showing whether or not the sorting functionality needs to be added
 */
function load_header(is_firstpage, add_sorting) {

    let header_div = document.createElement('div');
    "row no-gutters d-flex flex-row mx-4 my-4 d-flex align-items-center justify-content-center".split(" ").map(e => header_div.classList.add(e));

    let img_col = document.createElement('div');
    "col-12 d-flex align-items-center justify-content-center mb-3".split(" ").map(d => img_col.classList.add(d));
    img_col.style.height = '4em';
    img_col.style.cursor = 'pointer';

    let img = document.createElement('img');
    img.setAttribute('src', 'imgs/wpi logo color - cropped.png');
    img.style.height = '100%';

    let col = document.createElement('div');

    let h2 = document.createElement('h2');
    h2.innerText = "Virtual Undergraduate Research Showcase";
    "d-flex align-items-center justify-content-center mb-0 ml-4 text-center".split(" ").map(e => h2.classList.add(e));

    h2.addEventListener('mouseover', d => h2.style.color = "#ac2b37");
    h2.addEventListener('mouseout', d => h2.style.color = "#000000");
    if (!is_firstpage) {
        img_col.style.height = '3.5em';
        img.setAttribute('src', '../imgs/wpi logo color - cropped.png');
        // img_col.style.marginLeft = '-5em';
        // col.classList.add('col-12');
        h2.addEventListener('click', d => window.location.href = "../index.html");
        img_col.addEventListener('click', d => window.location.href = "../index.html");
        h2.style.fontSize = '1.5em';
    } else {
        col.classList.add('col-8');
    }

    header_div.appendChild(img_col);
    img_col.appendChild(img);
    header_div.appendChild(col);
    col.appendChild(h2);
    document.getElementsByTagName('body')[0].appendChild(header_div);

    if (add_sorting) {
        add_sorting_elements(header_div)
    }
}

/**
 * Load title element in page of given department, i.e. in mathematical sciences, load the title "Mathematical Sciences"
 * @param dept the department whose title needs to be loaded
 */
function load_title(dept) {
    let title_div = document.createElement('div');
    "row align-items-center justify-content-center no-gutters mt-3 mb-3 mx-3 text-center title-row".split(" ").map(e => title_div.classList.add(e));

    let title_h3 = document.createElement('h3');
    title_h3.classList.add('text-center');
    title_h3.innerText = dept;

    title_div.appendChild(title_h3);
    document.getElementsByTagName('body')[0].appendChild(title_div);
}

/**
 * Load the search button that leads to search_script.js
 * @param is_firstpage boolean showing whether or not the button will be loaded in the first page,
 * i.e. the one with the tiles
 */
function add_search_button(is_firstpage) {
    let btn_col = document.createElement('div');
    "row no-gutters align-items-center justify-content-around my-3".split(" ").map(d => btn_col.classList.add(d));
    document.getElementsByClassName('title-row')[0].classList.remove('mb-3');
    document.getElementsByClassName('title-row')[0].classList.add('mb-1');

    let btn = document.createElement('button');
    btn.innerText = "Search all projects";
    let loc = is_firstpage ? 'search.html' : '../search.html';
    btn.onclick = function (e) {
        e.preventDefault();
        window.location.href = loc
    };

    if (is_firstpage) {
        "btn btn-sm btn-light".split(" ").map(d => btn.classList.add(d));
        btn.style.width = '45%';

        let other_btn = document.createElement('button');
        "btn btn-sm btn-light".split(" ").map(d => other_btn.classList.add(d));
        other_btn.style.width = '45%';
        other_btn.innerHTML = 'A Message from the Office of Undergraduate Research';
        other_btn.setAttribute('id', 'word-btn');
        other_btn.setAttribute('data-toggle', "modal");
        other_btn.setAttribute('data-target', "#exampleModalLong");
        $(document).on('show.bs.modal', '#exampleModalLong', function () {
            showhide_card_text()
        });
        $(document).on('hide.bs.modal', '#exampleModalLong', function () {
            showhide_card_text(true)
        });

        btn_col.appendChild(other_btn);

    } else {
        "btn btn-sm btn-block btn-light".split(" ").map(d => btn.classList.add(d));
    }
    btn_col.appendChild(btn);
    document.getElementsByTagName('body')[0].appendChild(btn_col);
}

/**
 * Adds footer of all pages, containing information about wpi and the creators of the site
 */
function load_footer() {
    let footer = document.createElement('footer');
    footer.setAttribute('id', 'footer');
    footer.style.backgroundColor = '#ac2b37';
    "page-footer white mt-2 py-1 fixed-bottom"
        .split(" ")
        .map(e => footer.classList.add(e));


    let adiv_1 = document.createElement('div');
    adiv_1.style.opacity = 0.9;
    adiv_1.innerHTML = '<a class="text-white" href=" https://www.wpi.edu/research/student/undergraduate"><u>Office of Undergraduate Research</u></a> | <a class="text-white" href="https://www.wpi.edu"> <u>Worcester Polytechnic Institute</u></a> '
    // '<br/> Organized by: Prof. Suzanne L. Weekes, Associate Dean of Undergraduate Studies | Ally M. Salvino \'22 |  Petra Kumi \'20';
    "col footer-copyright text-center text-white pl-3 footer-text"
        .split(" ")
        .map(e => adiv_1.classList.add(e));

    let adiv_2 = document.createElement('div');
    adiv_2.style.opacity = 0.7;
    adiv_2.innerHTML = 'Prof. Suzanne L. Weekes, Associate Dean of Undergraduate Studies &nbsp &nbsp Ally M. Salvino \'22 &nbsp &nbsp Petra Kumi \'20';
    "col footer-copyright text-center text-white pr-3 footer-text"
        .split(" ")
        .map(e => adiv_2.classList.add(e));

    footer.appendChild(adiv_1);
    footer.appendChild(adiv_2);
    document.getElementsByTagName('body')[0].appendChild(footer)
}

/**
 * loads a project in the current page
 * @param datum a specific data element that was received from the Google Sheet or csv
 * @param container the element that will contain the information from the datum
 * @param in_search whether this element is loaded within the search page
 */
function load_project_entry(datum, container, in_search) {

    datum.Video === 'TBA' || datum.Video === 'TBD' ? datum.Video = temp_video : datum.Video = datum.Video
    datum.Slides === 'TBA' || datum.Slides === 'TBD' ? datum.Slides = temp_slides : datum.Slides = datum.Slides

    var parser = new DOMParser();
    var htmlDoc = parser.parseFromString(datum.Video, 'text/html');
    let video = htmlDoc.getElementsByTagName('iframe')[0].src;

    let new_row = document.createElement('div');
    "row no-gutters py-4 mx-3 new_row".split(" ").map(e => new_row.classList.add(e));

    let video_iframe_1 = '<div class="video-div"><iframe class="video" src="';
    let video_iframe_2 = '" frameborder="0" scrolling="no" allowfullscreen=""></iframe></div>';

    if (is_mobile()) {
        video = '<div class="mobile-video-div"><iframe class="video" style="height: 100%" src="' + video + video_iframe_2;
    } else {
        video = video_iframe_1 + video + video_iframe_2;
    }

    let title = document.createElement('div');
    title.classList.add('row');
    title.classList.add('no-gutters');
    title.innerHTML = "<h5>" + datum['Presentation Number'] + ". " + datum.Title + "</h5>";

    let people = document.createElement('div');
    people.classList.add('row');
    people.classList.add('no-gutters');
    people.innerHTML = "<p>" +
        "<b>Students: </b>" + datum.Students + "<br/>" +
        "<b>Advisors: </b>" + datum.Advisors +
        "</p>";

    let abstract = document.createElement('div');
    abstract.classList.add('row');
    abstract.classList.add('no-gutters');
    abstract.innerHTML = "<p class='abstract-text'>" + datum.Abstract + "</p>";

    let col_1 = document.createElement('div');
    "col-lg-3 iframe-cols".split(" ").map(e => col_1.classList.add(e));
    col_1.innerHTML = video;

    let col_2 = document.createElement('div');
    "col-lg-6 px-4 text-cols".split(" ").map(e => col_2.classList.add(e));
    // col_2.style.fontSize = '0.9em';
    col_2.appendChild(title);
    col_2.appendChild(people);
    col_2.appendChild(abstract);

    let col_3 = document.createElement('div');
    "col-lg-3 iframe-cols d-flex align-items-center justify-content-center".split(" ").map(e => col_3.classList.add(e));
    col_3.innerHTML = String(datum.Slides);


    if (is_mobile()) {
        col_1.style.height = '25em';
        "d-flex align-items-center justify-content-center".split(" ").map(d => {
            col_1.classList.add(d);
            col_3.classList.add(d);
        });
        col_2.classList.add('my-4');
        col_2.style.fontSize = '1.3em';
        col_3.style.height = '25em';
    }

    let a = document.createElement('a');
    a.setAttribute('name',datum['Presentation Number']);
    new_row.appendChild(a);
    new_row.appendChild(col_1);
    new_row.appendChild(col_2);
    new_row.appendChild(col_3);


    if (in_search) {
        document.getElementById('project-info').innerHTML = "";
        document.getElementById('project-info').appendChild(new_row);
        // console.log('here', datum.Video, datum.Video.split("style=")[0].src);
    } else {
        container.appendChild(new_row);
        document.getElementsByTagName('body')[0].appendChild(container);
    }

}

/**
 * Loads element that sorts all visible projects. Currently not used in the page.
 * @param header_div the element of the header where the sorting element will be added
 */
function add_sorting_elements(header_div) {
    let sort_col = document.createElement('div');
    sort_col.classList.add('col');

    let sort_dropdown_div = document.createElement('div');
    sort_dropdown_div.classList.add('dropdown');

    let dropdown_label = document.createElement('label');
    dropdown_label.setAttribute('for', 'filter-dropdown');
    dropdown_label.innerText = 'Sort By:';

    let dropdown_select = document.createElement('select');
    dropdown_select.classList.add('custom-select');
    dropdown_select.setAttribute('id', 'filter-dropdown');
    dropdown_select.onchange = sort_data(dropdown_select);

    let firstoption = document.createElement('option');
    firstoption.selected = true;
    firstoption.innerText = 'Default';
    firstoption.disabled = true;

    dropdown_select.appendChild(firstoption);

    let option_vals = ['title', 'advisor', 'random'];
    let option_text = ['Project Title', 'Advisor Name', 'Random'];

    for (let i = 0; i < 3; i++) {
        let otheroption = document.createElement('option');
        otheroption.setAttribute('value', option_vals[i]);
        otheroption.innerText = option_text[i];
        dropdown_select.appendChild(otheroption)
    }

    sort_col.appendChild(sort_dropdown_div);
    sort_dropdown_div.appendChild(dropdown_label);
    sort_dropdown_div.appendChild(dropdown_select);
    header_div.appendChild(sort_col)
}

/**
 * Toggles between showing and hiding text of the cards in the main page of the site.
 * Used when a message from the associate dean button is pressed and when its repsective modal is hidden.
 * @param show boolean on whether the card text should be shown or hidden
 */
function showhide_card_text(show) {
    let card_texts = document.getElementsByClassName('centered');
    for (let a_text of card_texts) {
        if (show) {
            a_text.style.zIndex = 10;
        } else {
            a_text.style.zIndex = -1;
        }
    }
}

/**
 * Checks if the site is loaded on mobile
 */
function is_mobile() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
}
