import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksRow extends Struct.ComponentSchema {
  collectionName: 'components_blocks_rows';
  info: {
    description: '';
    displayName: 'row';
  };
  attributes: {
    card: Schema.Attribute.Component<'elements.card', true>;
  };
}

export interface ElementsButtomLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_buttom_links';
  info: {
    displayName: 'Buttom Link';
  };
  attributes: {
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    link: Schema.Attribute.String;
    Title: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<['PRIMARY', 'SECONDARY']>;
  };
}

export interface ElementsCard extends Struct.ComponentSchema {
  collectionName: 'components_elements_cards';
  info: {
    description: '';
    displayName: 'card';
  };
  attributes: {
    category: Schema.Attribute.String & Schema.Attribute.DefaultTo<''>;
    description: Schema.Attribute.Text;
    duration: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    link: Schema.Attribute.Component<'elements.buttom-link', false>;
    price: Schema.Attribute.Decimal & Schema.Attribute.DefaultTo<0>;
    rating: Schema.Attribute.Decimal & Schema.Attribute.DefaultTo<0>;
    reviews: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    slug: Schema.Attribute.UID<'heading'> & Schema.Attribute.Unique;
  };
}

export interface ElementsCodingProblem extends Struct.ComponentSchema {
  collectionName: 'coding_problem';
  info: {
    description: 'Contains text, syntax, and an optional embedded video.';
    displayName: 'Coding Problem';
  };
  attributes: {
    embedded_video: Schema.Attribute.String;
    problem_text: Schema.Attribute.RichText & Schema.Attribute.Required;
    syntax: Schema.Attribute.Text;
  };
}

export interface ElementsCompanySpecific extends Struct.ComponentSchema {
  collectionName: 'company_specific';
  info: {
    description: 'Contains text specific to companies.';
    displayName: 'Company Specific';
  };
  attributes: {
    company_specific: Schema.Attribute.String;
    Relevance: Schema.Attribute.Float &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 10;
          min: 0;
        },
        number
      > &
      Schema.Attribute.DefaultTo<0>;
  };
}

export interface ElementsConcept extends Struct.ComponentSchema {
  collectionName: 'exam_specific_contents';
  info: {
    icon: 'calculator';
    name: 'Exam Specific Content';
  };
  attributes: {
    classification_method: Schema.Attribute.Text & Schema.Attribute.Required;
    formula: Schema.Attribute.Text;
    mcq: Schema.Attribute.RichText;
    practice_questions: Schema.Attribute.RichText;
    sample_solved_questions: Schema.Attribute.RichText;
  };
}

export interface ElementsContent extends Struct.ComponentSchema {
  collectionName: 'topic_contents';
  info: {
    icon: 'align-left';
    name: 'Content of Topic';
  };
  attributes: {
    concept: Schema.Attribute.String & Schema.Attribute.Required;
    formula: Schema.Attribute.Text;
    methodology: Schema.Attribute.Text;
    sample_question: Schema.Attribute.RichText;
    trick: Schema.Attribute.Text;
  };
}

export interface ElementsExamRelevance extends Struct.ComponentSchema {
  collectionName: 'exam_relevance';
  info: {
    description: '';
    displayName: 'Exam Relevance';
  };
  attributes: {
    about: Schema.Attribute.RichText;
    exam_relevance: Schema.Attribute.Component<'elements.exam-specific', true>;
    faq: Schema.Attribute.Component<'elements.faq', true>;
    list_of_types: Schema.Attribute.Component<'elements.relevance-type', true>;
    PDF: Schema.Attribute.Component<'elements.pdf', true>;
  };
}

export interface ElementsExamSpecific extends Struct.ComponentSchema {
  collectionName: 'exam_specifics';
  info: {
    description: '';
    displayName: 'Exam Specific';
  };
  attributes: {
    exam_name: Schema.Attribute.String & Schema.Attribute.Required;
    relevance_score: Schema.Attribute.Float &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 10;
          min: 0;
        },
        number
      >;
  };
}

export interface ElementsExplanation extends Struct.ComponentSchema {
  collectionName: 'explanations';
  info: {
    displayName: 'Explanation';
  };
  attributes: {
    image: Schema.Attribute.Media;
    text: Schema.Attribute.Text;
  };
}

export interface ElementsFaq extends Struct.ComponentSchema {
  collectionName: 'faq';
  info: {
    description: 'Frequently Asked Questions with images for both question and answer.';
    displayName: 'FAQ';
  };
  attributes: {
    answer: Schema.Attribute.RichText & Schema.Attribute.Required;
    answer_image: Schema.Attribute.Media<'images'>;
    question: Schema.Attribute.String & Schema.Attribute.Required;
    question_image: Schema.Attribute.Media<'images'>;
  };
}

export interface ElementsFormula extends Struct.ComponentSchema {
  collectionName: 'formulas';
  info: {
    description: '';
    displayName: 'Formula';
  };
  attributes: {
    about: Schema.Attribute.RichText;
    Embeded_video_description: Schema.Attribute.Text;
    formula_list: Schema.Attribute.Component<'elements.formula-item', true>;
    video_embed: Schema.Attribute.Text;
  };
}

export interface ElementsFormulaItem extends Struct.ComponentSchema {
  collectionName: 'formula_items';
  info: {
    displayName: 'Formula Item';
  };
  attributes: {
    image: Schema.Attribute.Media;
    text: Schema.Attribute.Text;
  };
}

export interface ElementsMcq extends Struct.ComponentSchema {
  collectionName: 'mcq';
  info: {
    description: 'Multiple Choice Questions with images for options, answers, and explanation.';
    displayName: 'MCQ';
  };
  attributes: {
    answer_explanation: Schema.Attribute.RichText;
    correct_option: Schema.Attribute.Enumeration<['A', 'B', 'C', 'D']> &
      Schema.Attribute.Required;
    explanation_image: Schema.Attribute.Media<'images'>;
    option_a: Schema.Attribute.String & Schema.Attribute.Required;
    option_a_image: Schema.Attribute.Media<'images'>;
    option_b: Schema.Attribute.String & Schema.Attribute.Required;
    option_b_image: Schema.Attribute.Media<'images'>;
    option_c: Schema.Attribute.String & Schema.Attribute.Required;
    option_c_image: Schema.Attribute.Media<'images'>;
    option_d: Schema.Attribute.String & Schema.Attribute.Required;
    option_d_image: Schema.Attribute.Media<'images'>;
    question: Schema.Attribute.String & Schema.Attribute.Required;
    question_image: Schema.Attribute.Media<'images'>;
  };
}

export interface ElementsOverview extends Struct.ComponentSchema {
  collectionName: 'overviews';
  info: {
    displayName: 'Overview';
  };
  attributes: {
    about: Schema.Attribute.Text;
    basic_info: Schema.Attribute.Text;
    image: Schema.Attribute.Media;
  };
}

export interface ElementsPdf extends Struct.ComponentSchema {
  collectionName: 'components_elements_pdfs';
  info: {
    displayName: 'Pdf';
  };
  attributes: {
    Image: Schema.Attribute.Media<'images' | 'videos'>;
    Link: Schema.Attribute.Text;
    Text: Schema.Attribute.Text;
  };
}

export interface ElementsPrice extends Struct.ComponentSchema {
  collectionName: 'components_elements_price';
  info: {
    description: 'Price component for courses.';
    displayName: 'price';
  };
  attributes: {
    currency: Schema.Attribute.String & Schema.Attribute.DefaultTo<'\u20B9'>;
    current: Schema.Attribute.Float & Schema.Attribute.Required;
    original: Schema.Attribute.Float;
  };
}

export interface ElementsRelevanceType extends Struct.ComponentSchema {
  collectionName: 'relevance_types';
  info: {
    description: '';
    displayName: 'Relevance Type';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media;
    importance_bar: Schema.Attribute.Float &
      Schema.Attribute.SetMinMax<
        {
          max: 10;
          min: 0;
        },
        number
      >;
  };
}

export interface ElementsSeo extends Struct.ComponentSchema {
  collectionName: 'components_elements_seos';
  info: {
    description: '';
    displayName: 'seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Blocks;
    metaImage: Schema.Attribute.Media<'images'>;
    metaTitle: Schema.Attribute.String;
  };
}

export interface ElementsTheory extends Struct.ComponentSchema {
  collectionName: 'theory';
  info: {
    description: 'Contains text, syntax, image, and video for a concept.';
    displayName: 'Theory';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    syntax: Schema.Attribute.Text;
    text: Schema.Attribute.RichText & Schema.Attribute.Required;
    video: Schema.Attribute.String;
  };
}

export interface SharedOpenGraph extends Struct.ComponentSchema {
  collectionName: 'components_shared_open_graphs';
  info: {
    displayName: 'openGraph';
    icon: 'project-diagram';
  };
  attributes: {
    ogdescription: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 200;
      }>;
    ogimage: Schema.Attribute.Media<'images'>;
    ogtitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 70;
      }>;
    ogtype: Schema.Attribute.String;
    ogurl: Schema.Attribute.String;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    canonicalURL: Schema.Attribute.String;
    keywords: Schema.Attribute.Text;
    metaDescription: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 160;
        minLength: 50;
      }>;
    metaImage: Schema.Attribute.Media<'images'>;
    metaRobots: Schema.Attribute.String;
    metaTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaViewport: Schema.Attribute.String;
    openGraph: Schema.Attribute.Component<'shared.open-graph', false>;
    structuredData: Schema.Attribute.JSON;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.row': BlocksRow;
      'elements.buttom-link': ElementsButtomLink;
      'elements.card': ElementsCard;
      'elements.coding-problem': ElementsCodingProblem;
      'elements.company-specific': ElementsCompanySpecific;
      'elements.concept': ElementsConcept;
      'elements.content': ElementsContent;
      'elements.exam-relevance': ElementsExamRelevance;
      'elements.exam-specific': ElementsExamSpecific;
      'elements.explanation': ElementsExplanation;
      'elements.faq': ElementsFaq;
      'elements.formula': ElementsFormula;
      'elements.formula-item': ElementsFormulaItem;
      'elements.mcq': ElementsMcq;
      'elements.overview': ElementsOverview;
      'elements.pdf': ElementsPdf;
      'elements.price': ElementsPrice;
      'elements.relevance-type': ElementsRelevanceType;
      'elements.seo': ElementsSeo;
      'elements.theory': ElementsTheory;
      'shared.open-graph': SharedOpenGraph;
      'shared.seo': SharedSeo;
    }
  }
}
