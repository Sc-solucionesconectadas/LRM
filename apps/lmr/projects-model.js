export const projectSector = (project, ui) => ui.sectorById[project.id] ?? project.sector;

// Source and reference notes are private editorial context, not dossier content.
export const hasProjectDetails = project => Boolean(project.work?.trim() || project.photos?.length || project.description?.trim() || project.challenge?.trim() || project.solution?.trim() || project.result?.trim());

export function galleryIndex(current, delta, length) {
  return Math.max(0, Math.min(Math.max(0, length - 1), current + delta));
}
