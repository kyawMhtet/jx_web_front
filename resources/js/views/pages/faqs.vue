<script>
import Layout from "../../layouts/main.vue";
import PageHeader from "../../components/page-header.vue";

export default {
    data() {
        return {
            title: "FAQs",
            items: [{
                    text: "Pages",
                    href: "/",
                },
                {
                    text: "FAQs",
                    active: true,
                },
            ],
        };
    },
    components: {
        Layout,
        PageHeader,
    },
};
</script>

<template>
<Layout>
    <PageHeader :title="title" :items="items" />
    <b-card no-body>
        <b-card-body>
            <b-row>
                <b-col xl="4">
                    <b-card-title title-tag="h5" class="mb-3">General Questions</b-card-title>
                    <p class="text-muted">General knowledge is information that has been accumulated over time through
                        various mediums and sources. It excludes specialized learning that can only be obtained with
                        extensive training and information confined to a single medium.</p>
                </b-col>
                <b-col xl="8">
                    <div class="accordion accordion-border-box" id="genques-accordion">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="genques-headingOne">
                                <b-button variant="none" class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#genques-collapseOne" aria-expanded="true" aria-controls="genques-collapseOne">
                                    What are FAQ questions?
                                </b-button>
                            </h2>
                            <div id="genques-collapseOne" class="accordion-collapse collapse show" aria-labelledby="genques-headingOne" data-bs-parent="#genques-accordion">
                                <div class="accordion-body">
                                    An FAQ page <b>(short for Frequently Asked Question page)</b> is a part of your
                                    website that provides answers to common questions, assuages concerns, and overcomes
                                    objections. It's a space where customers away from your sales-focused landing pages
                                    and homepage.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="genques-headingTwo">
                                <b-button variant="none" class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#genques-collapseTwo" aria-expanded="false" aria-controls="genques-collapseTwo">
                                    What is FAQ process?
                                </b-button>
                            </h2>
                            <div id="genques-collapseTwo" class="accordion-collapse collapse" aria-labelledby="genques-headingTwo" data-bs-parent="#genques-accordion">
                                <div class="accordion-body">
                                    FAQ stands for Frequently Asked Questions. It's <b>your opportunity to communicate
                                        with the most important visitors to your website</b> – those who have begun the
                                    decision-making process about whether to do business with you can't fit elsewhere on
                                    their website.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="genques-headingThree">
                                <b-button variant="none" class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#genques-collapseThree" aria-expanded="false" aria-controls="genques-collapseThree">
                                    What is the purpose of FAQ?
                                </b-button>
                            </h2>
                            <div id="genques-collapseThree" class="accordion-collapse collapse" aria-labelledby="genques-headingThree" data-bs-parent="#genques-accordion">
                                <div class="accordion-body">
                                    The purpose of a FAQ is generally to provide information on frequent questions or
                                    concerns; however, the format is a useful means of organizing information, and text
                                    consisting of questions and their answers may thus be called a FAQ regardless.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="genques-headingFour">
                                <b-button variant="none" class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#genques-collapseFour" aria-expanded="false" aria-controls="genques-collapseFour">
                                    What is an online FAQ?
                                </b-button>
                            </h2>
                            <div id="genques-collapseFour" class="accordion-collapse collapse" aria-labelledby="genques-headingFour" data-bs-parent="#genques-accordion">
                                <div class="accordion-body">
                                    FAQs stand for frequently asked questions. It is one of the many crucial pages of
                                    your website. It gives your customers answers to recurring and common questions and
                                    addresses their concerns public product documentation that is released at the same
                                    time.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="genques-headingFive">
                                <b-button variant="none" class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#genques-collapseFive" aria-expanded="false" aria-controls="genques-collapseFive">
                                    What are some design questions?
                                </b-button>
                            </h2>
                            <div id="genques-collapseFive" class="accordion-collapse collapse" aria-labelledby="genques-headingFive" data-bs-parent="#genques-accordion">
                                <div class="accordion-body">
                                    These questions will help clients feel involved with the design process, and they'll
                                    also help you brainstorm ideas and fine-tune your creative output.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="genques-headingSix">
                                <b-button variant="none" class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#genques-collapseSix" aria-expanded="false" aria-controls="genques-collapseSix">
                                    What are the 4 questions of design?
                                </b-button>
                            </h2>
                            <div id="genques-collapseSix" class="accordion-collapse collapse" aria-labelledby="genques-headingSix" data-bs-parent="#genques-accordion">
                                <div class="accordion-body">
                                    The methodology I've found most successful, has been introduced by prof Jeanne
                                    Liedtka from Darden Business School and identifies four stages: What is?, What if?,
                                    What wows?, and What works?
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--end accordion-->
                </b-col>
            </b-row>
        </b-card-body>
    </b-card>

    <b-card no-body>
        <b-card-body>
            <b-row>
                <b-col xl="4">
                    <b-card-title title-tag="h5" class="mb-3">Manage Account</b-card-title>
                    <p class="text-muted">Cybersecurity experts recommend changing your password every three months.
                        There may even be situations where you should change your password immediately, especially if a
                        cybercriminal has access to your account.</p>
                </b-col>
                <b-col xl="8">
                    <div class="accordion accordion-border-box" id="manageaccount-accordion">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="manageaccount-headingOne">
                                <b-button variant="none" class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#manageaccount-collapseOne" aria-expanded="false" aria-controls="manageaccount-collapseOne">
                                    What is account management process?
                                </b-button>
                            </h2>
                            <div id="manageaccount-collapseOne" class="accordion-collapse collapse" aria-labelledby="manageaccount-headingOne" data-bs-parent="#manageaccount-accordion">
                                <div class="accordion-body">
                                    If several languages coalesce, the grammar of the resulting language is more simple
                                    and regular than that of the individual languages. The new common language will be
                                    more simple and regular than the existing European languages. It will be as simple
                                    their most common words.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="manageaccount-headingTwo">
                                <b-button variant="none" class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#manageaccount-collapseTwo" aria-expanded="true" aria-controls="manageaccount-collapseTwo">
                                    Why is account management important?
                                </b-button>
                            </h2>
                            <div id="manageaccount-collapseTwo" class="accordion-collapse collapse show" aria-labelledby="manageaccount-headingTwo" data-bs-parent="#manageaccount-accordion">
                                <div class="accordion-body">
                                    The new common language will be more simple and regular than the existing European
                                    languages. It will be as simple as Occidental; in fact, it will be Occidental. To an
                                    English person, it will seem like simplified English, as a skeptical Cambridge
                                    friend of mine told me what Occidental is.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="manageaccount-headingThree">
                                <b-button variant="none" class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#manageaccount-collapseThree" aria-expanded="false" aria-controls="manageaccount-collapseThree">
                                    What is account manager role?
                                </b-button>
                            </h2>
                            <div id="manageaccount-collapseThree" class="accordion-collapse collapse" aria-labelledby="manageaccount-headingThree" data-bs-parent="#manageaccount-accordion">
                                <div class="accordion-body">
                                    he wise man therefore always holds in these matters to this principle of selection:
                                    he rejects pleasures to secure other greater pleasures, or else he endures pains to
                                    avoid worse pains.But I must explain to you how all this mistaken idea of denouncing
                                    pleasure and praising pain was born.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="manageaccount-headingFour">
                                <b-button variant="none" class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#manageaccount-collapseFour" aria-expanded="false" aria-controls="manageaccount-collapseFour">
                                    What is a key account strategy?
                                </b-button>
                            </h2>
                            <div id="manageaccount-collapseFour" class="accordion-collapse collapse" aria-labelledby="manageaccount-headingFour" data-bs-parent="#manageaccount-accordion">
                                <div class="accordion-body">
                                    Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante ipsum primis in
                                    faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi
                                    consectetuer lacinia. Nam pretium turpis et arcu arcu tortor, suscipit eget,
                                    imperdiet nec, imperdiet iaculis aliquam ultrices mauris.
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--end accordion-->
                </b-col>
            </b-row>
        </b-card-body>
    </b-card>

    <b-card no-body>
        <b-card-body>
            <b-row>
                <b-col xl="4">
                    <b-card-title title-tag="h5" class="mb-3">Privacy & Security</b-card-title>
                    <p class="text-muted">Privacy is the right to control how your information is viewed and used, while
                        security is protection against threats or danger. In the digital world, security generally
                        refers to the unauthorized access of data, often involving protection against hackers or cyber
                        criminals.</p>
                </b-col>
                <b-col xl="8">
                    <div class="accordion accordion-border-box" id="privacy-accordion">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="privacy-headingOne">
                                <b-button variant="none" class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#privacy-collapseOne" aria-expanded="true" aria-controls="privacy-collapseOne">
                                    Which is important privacy or security?
                                </b-button>
                            </h2>
                            <div id="privacy-collapseOne" class="accordion-collapse collapse show" aria-labelledby="privacy-headingOne" data-bs-parent="#privacy-accordion">
                                <div class="accordion-body">
                                    If several languages coalesce, the grammar of the resulting language is more simple
                                    and regular than that of the individual languages. The new common language will be
                                    more simple and regular than the existing European languages. It will be as simple
                                    their most common words.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="privacy-headingTwo">
                                <b-button variant="none" class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#privacy-collapseTwo" aria-expanded="false" aria-controls="privacy-collapseTwo">
                                    What is security and privacy?
                                </b-button>
                            </h2>
                            <div id="privacy-collapseTwo" class="accordion-collapse collapse" aria-labelledby="privacy-headingTwo" data-bs-parent="#privacy-accordion">
                                <div class="accordion-body">
                                    The new common language will be more simple and regular than the existing European
                                    languages. It will be as simple as Occidental; in fact, it will be Occidental. To an
                                    English person, it will seem like simplified English, as a skeptical Cambridge
                                    friend of mine told me what Occidental is.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="privacy-headingThree">
                                <b-button variant="none" class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#privacy-collapseThree" aria-expanded="false" aria-controls="privacy-collapseThree">
                                    How can I protect my privacy?
                                </b-button>
                            </h2>
                            <div id="privacy-collapseThree" class="accordion-collapse collapse" aria-labelledby="privacy-headingThree" data-bs-parent="#privacy-accordion">
                                <div class="accordion-body">
                                    He wise man therefore always holds in these matters to this principle of selection:
                                    he rejects pleasures to secure other greater pleasures, or else he endures pains to
                                    avoid worse pains.But I must explain to you how all this mistaken idea of denouncing
                                    pleasure and praising pain was born and I will give you a complete.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="privacy-headingFour">
                                <b-button variant="none" class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#privacy-collapseFour" aria-expanded="false" aria-controls="privacy-collapseFour">
                                    Why is privacy so important?
                                </b-button>
                            </h2>
                            <div id="privacy-collapseFour" class="accordion-collapse collapse" aria-labelledby="privacy-headingFour" data-bs-parent="#privacy-accordion">
                                <div class="accordion-body">
                                    Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante ipsum primis in
                                    faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi
                                    consectetuer lacinia. Nam pretium turpis et arcu arcu tortor, suscipit eget,
                                    imperdiet nec, imperdiet iaculis aliquam ultrices mauris.
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--end accordion-->
                </b-col>
            </b-row>
        </b-card-body>
    </b-card>
</Layout>
</template>
