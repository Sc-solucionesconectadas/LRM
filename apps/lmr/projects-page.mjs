import {formatted as f} from '../../shared/inline-format.mjs';
import { escapeHtml as e, richText as r, headingText as h, arrow } from '../../shared/html.mjs';
import { picture } from '../../shared/layout.mjs';
import { projectSector, hasProjectDetails } from './projects-model.js';
import { projectCover } from './project-cover.mjs';
import { companyIllustration } from './company-icons.mjs';

const consultation = (ctx, project, className = 'text-link') => `<a class="${className} project-consult" href="${ctx.href('contacto/')}?proyecto=${encodeURIComponent(project.title)}">${e(ctx.copy.projects.consult)} ${arrow}</a>`;

function dossierSections(ctx,project) {
  const c=ctx.copy.projects;
  const review=ctx.projectPlaceholders;
  const facts=[
    ...(project.client?[{label:c.clientLabel,value:f(project,'client')}]:[
      ...(project.logo?[{label:c.installationLabel,value:f(project,'title')}]:[]),
      ...(review?[{label:c.clientLabel,value:'Acá iría el nombre del cliente o comitente.',pending:true}]:[])
    ]),
    {label:c.sectorLabel,value:e(projectSector(project,ctx.projectUi))},
    ...(project.location?[{label:c.locationLabel,value:f(project,'location')}]:review?[{label:c.locationLabel,value:'Acá iría la localidad de la obra.',pending:true}]:[])
  ];
  const sections=[
    ...(project.challenge?[{title:c.challengeLabel,field:'challenge'}]:review?[{title:c.challengeLabel,text:'Acá iría la necesidad inicial o el objetivo de la obra. Si es una instalación nueva, se contará qué se necesitaba construir.',pending:true}]:[]),
    {title:c.solutionLabel,field:project.solution?'solution':'work'},
    ...(!project.solution&&review?[{title:'La solución en detalle',text:'Acá iría la solución: los trabajos realizados, los sistemas instalados y el alcance de la intervención de LMR.',pending:true}]:[]),
    ...(project.description?[{title:c.descriptionLabel,field:'description'}]:review?[{title:c.descriptionLabel,text:'Acá irían los detalles de la intervención, las especialidades que participaron y las particularidades de esta obra.',pending:true}]:[]),
    ...(project.result?[{title:c.resultLabel,field:'result'}]:review?[{title:c.resultLabel,text:'Acá iría el resultado confirmado por el cliente o el avance actual, si el proyecto sigue en ejecución.',pending:true}]:[])
  ];
  return `<dl class="project-dossier-facts">${facts.map(fact=>`<div><dt>${e(fact.label)}</dt><dd${fact.pending?' class="project-pending-fact"':''}>${fact.value}</dd></div>`).join('')}</dl><div class="project-dossier-story">${sections.map(section=>`<section${section.pending?' class="project-pending-section"':''}><h3>${e(section.title)}</h3><p>${section.field?f(project,section.field):e(section.text)}</p></section>`).join('')}</div>`;
}

function projectStory(ctx) {
  const c=ctx.copy.projects;
  const sectors=c.sectorStories.filter(item=>ctx.projects.some(project=>projectSector(project,ctx.projectUi)===item.sector));
  return `<section class="container portfolio-story" aria-labelledby="portfolio-story-title"><div class="portfolio-story-heading"><h2 id="portfolio-story-title">${h(c.storyTitle)}</h2><div><p>${r(c.storyIntro)}</p><p>${r(c.storyText)}</p></div></div><div class="portfolio-sector-stories">${sectors.map(item=>`<article data-reveal>${companyIllustration(item.illustration)}<div><h3>${e(item.sector)}</h3><p>${e(item.text)}</p></div></article>`).join('')}</div><aside class="portfolio-story-invitation" aria-labelledby="portfolio-invitation-title"><div><h3 id="portfolio-invitation-title">${h(c.storyInvitationTitle)}</h3><p>${r(c.storyInvitation)}</p></div><a class="button button-white" href="${ctx.href('contacto/')}">${e(c.storyInvitationCta)} ${arrow}</a></aside></section>`;
}

const photoSlots = ['Vista general de la instalación', 'Detalle de los trabajos realizados', 'Equipos instalados o resultado final'];

function photoPlaceholder(index, thumbnail=false) {
  const label=`Acá iría la foto ${index+1}`;
  if (thumbnail) return `<span class="project-photo-slot-thumb">Foto ${index+1}</span>`;
  return `<div class="project-photo-slot" role="img" aria-label="${e(label)}: ${e(photoSlots[index])}"><svg aria-hidden="true" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="7" y="12" width="50" height="40" rx="4"/><circle cx="23" cy="26" r="5"/><path d="m8 45 14-12 12 9 9-14 14 17"/></svg><span>${e(label)}</span></div>`;
}

function projectGallery(ctx, project) {
  const c=ctx.copy.projects;
  const photos=[...(project.photos??[])];
  // Review slots are presentation-only. Confirmed photos and source records stay intact.
  if (ctx.projectPlaceholders) while(photos.length<3) photos.push({placeholder:true,caption:photoSlots[photos.length]});
  if (!photos.length) return '';
  return `<section class="project-photo-gallery" aria-label="${e(c.galleryLabel)}"><h3 class="project-gallery-title">${e(c.galleryLabel)}</h3><div class="project-photo-stage">${photos.map((photo,i)=>`<figure data-project-photo>${photo.placeholder?photoPlaceholder(i):`<a href="${ctx.href(`assets/${ctx.images[photo.image].at(-1).file}`)}" target="_blank" rel="noopener noreferrer" aria-label="${e(c.openPhoto)}: ${e(photo.caption)}">${picture(ctx,photo.image,photo.alt,{sizes:'(max-width: 760px) 90vw, 440px'})}<span class="project-photo-enlarge">${e(c.openPhoto)} ${arrow}</span></a>`}<figcaption>${photo.placeholder?e(photo.caption):f(project,'photos.'+i+'.caption')}</figcaption></figure>`).join('')}</div><div class="project-photo-controls" hidden><button class="project-photo-prev" type="button" data-photo-prev aria-label="${e(c.previousPhoto)}">${arrow}</button><span data-photo-count aria-hidden="true"></span><button type="button" data-photo-next aria-label="${e(c.nextPhoto)}">${arrow}</button></div><div class="project-photo-thumbs" hidden role="group" aria-label="${e(c.choosePhoto)}">${photos.map((photo,i)=>`<button type="button" data-photo-select="${i}" aria-pressed="${i===0}" aria-label="${e(c.choosePhoto)} ${i+1}: ${e(photo.caption)}">${photo.placeholder?photoPlaceholder(i,true):picture(ctx,photo.image,'',{sizes:'100px'})}</button>`).join('')}</div><p class="sr-only" data-photo-status role="status" aria-live="polite" data-counter-template="${e(c.photoCounter)}"></p></section>`;
}

function dossier(ctx, project) {
  return `<div class="project-dossier">${dossierSections(ctx,project)}${projectGallery(ctx,project)}${consultation(ctx,project,'button')}</div>`;
}

function projectEntry(ctx, project) {
  const c = ctx.copy.projects, cover = project.photos?.[0];
  const progress = project.status === 'in-progress';
  const stateLabel=progress?c.inProgress:project.status==='completed'?c.completed:'';
  return `<article class="project-entry${cover ? ' project-entry--photo' : ' project-entry--identity'}" id="${e(project.id)}" data-portfolio-project data-portfolio-sector="${e(projectSector(project,ctx.projectUi))}" data-reveal>${projectCover(ctx, project, {className: 'project-entry-photo' + (cover ? '' : ' project-entry-identity'), caption: true, clientLogo: false, sizes: '(max-width: 760px) 90vw, (max-width: 1200px) 36vw, 380px'})}<div class="project-entry-content"><div class="project-entry-heading"><div><p class="project-entry-sector">${e(projectSector(project,ctx.projectUi))}</p>${stateLabel ? `<span class="project-entry-state">${e(stateLabel)}</span>` : ''}</div>${project.logo ? picture(ctx,project.logo.replace(/\.[^.]+$/,''),project.title,{className:'project-entry-logo',sizes:'86px'}) : ''}</div><h2 data-project-title>${f(project,'title')}</h2><span class="project-entry-work-label">${e(progress ? c.inProgressLabel : c.workLabel)}</span><p class="project-entry-work">${f(project,'work')}</p><div class="project-entry-action">${hasProjectDetails(project) ? `<details class="project-details"><summary class="button project-open-button" data-project-open="${e(project.id)}" aria-label="${e(c.detailCta)}: ${e(project.title)}"><span>${e(c.detailCta)}</span>${arrow}</summary>${dossier(ctx,project)}</details>` : consultation(ctx,project,'button')}</div></div></article>`;
}

function projectSheet(ctx) {
  const c = ctx.copy.projects;
  return `<dialog class="project-sheet" id="project-sheet" aria-labelledby="project-sheet-title"><div class="project-sheet-frame"><button type="button" class="project-sheet-close" data-project-close aria-label="${e(c.closeSheet)}"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="m6 6 12 12M18 6 6 18"/></svg></button><div class="project-sheet-heading"><p class="project-entry-sector" data-sheet-sector></p><div data-sheet-state></div><h2 id="project-sheet-title" tabindex="-1"></h2></div><div data-sheet-dossier></div><button type="button" class="project-sheet-return" data-project-close>${e(c.returnToProjects)}</button></div></dialog>`;
}

export function renderProjects(ctx) {
  const c = ctx.copy.projects;
  const ordered = [...ctx.projects];
  const sectors = ctx.projectUi.sectors.filter(sector => ordered.some(p => projectSector(p,ctx.projectUi) === sector));
  return `<section class="portfolio-hero" aria-labelledby="portfolio-title">${picture(ctx,'hero','',{eager:true,sizes:'100vw',className:'portfolio-hero-image'})}<div class="container portfolio-hero-inner" data-reveal><p class="portfolio-eyebrow">${e(c.heroLabel)}</p><h1 id="portfolio-title">${h(c.title)}</h1><p class="portfolio-hero-intro">${r(c.intro)}</p><div class="portfolio-hero-actions"><a class="button button-white" href="#portfolio-works">${e(c.exploreCta)} ${arrow}</a><a class="button button-glass" href="${ctx.href('contacto/')}">${e(c.introCta)} ${arrow}</a></div></div></section>${projectStory(ctx)}<section class="container portfolio" id="portfolio-works" aria-label="${e(c.catalogLabel)}"><div class="portfolio-toolbar"><div class="portfolio-filters" hidden role="group" aria-label="${e(c.filterLabel)}"><button type="button" data-portfolio-filter="all" aria-pressed="true">${e(c.all)}</button>${sectors.map(sector=>`<button type="button" data-portfolio-filter="${e(sector)}" aria-pressed="false">${e(sector)}</button>`).join('')}</div><p class="portfolio-count" role="status" aria-live="polite" aria-atomic="true" data-project-count data-many="${e(c.referencePlural)}" data-one="${e(c.referenceSingle)}">${ordered.length} ${e(ordered.length===1 ? c.referenceSingle : c.referencePlural)}</p></div><div class="portfolio-grid">${ordered.map(p=>projectEntry(ctx,p)).join('')}</div></section><section class="container portfolio-close"><div><h2>${h(c.closeTitle)}</h2><p>${r(c.closeText)}</p></div><div class="portfolio-close-actions"><a class="button" href="${ctx.href('contacto/')}">${e(c.introCta)} ${arrow}</a><a class="text-link" href="${ctx.href('servicios/')}">${e(c.electricalCta)} ${arrow}</a></div></section>${ordered.some(hasProjectDetails) ? projectSheet(ctx) : ''}`;
}
