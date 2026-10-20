import type { Service } from '@/lib/types';

type ServiceVisualProps = { service: Pick<Service, 'name' | 'tasks'>; compact?: boolean };

export function ServiceVisual({ service, compact = false }: ServiceVisualProps) {
  const steps = service.tasks.slice(0, compact ? 3 : 4);
  return <div className={`service-visual${compact ? ' is-compact' : ''}`} role="img" aria-label={`${service.name} workflow from approved source to accountable owner`}>
    <div className="service-visual-heading"><span>Approved source</span><strong>{service.name}</strong></div>
    <div className="service-visual-flow">{steps.map((step, index) => <div className="service-visual-step" key={step}><span>{String(index + 1).padStart(2, '0')}</span><p>{step}</p></div>)}</div>
    <div className="service-visual-owner">Accountable owner</div>
  </div>;
}
