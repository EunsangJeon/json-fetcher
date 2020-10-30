// modifiers in typescript: public, private and protected

class CDN {
  constructor(public accountId: string) {}

  public createDistribution(): void {
    console.log('created new distribution');
  }

  // default: public
  invalidate(): void {
    console.log('invalidate cached data');
  }

  protected generalCdnDocument = 'cdn is useful technology';
}
const cdn = new CDN('mockup-id');
cdn.createDistribution();
cdn.invalidate();

class Akamai extends CDN {
  constructor(accountId: string, private edgeLocation: string) {
    super(accountId);
  }

  public createDistribution(): void {
    console.log('created new akamai edge distribution');
  }

  private akamaiDocument = 'akamai is the best cdn';

  public openProtectedDocument(): void {
    console.log(this.generalCdnDocument);
  }

  public openPrivateDocument(): void {
    console.log(this.akamaiDocument);
  }
}
const akamai = new Akamai('a0987afasdg9', 'Singapore');
akamai.createDistribution();
akamai.invalidate();
akamai.openProtectedDocument();
akamai.openPrivateDocument();
