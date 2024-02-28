import React from 'react'

function ContactPage() {
  return (
    <div id="contents">
				<div className="box">
					<div>
						<div id="contact" className="body">
							<h1>Contact</h1>
							<form action="index.html" method="post">
								<table>
									<tbody>
										<tr>
											<td>Name:</td>
											<td><input type="text" value="" className="txtfield"/></td>
										</tr> <tr>
											<td>Email:</td>
											<td><input type="text" value="" className="txtfield"/></td>
										</tr> <tr>
											<td>Subject:</td>
											<td><input type="text" value="" className="txtfield"/></td>
										</tr> <tr>
											<td className="txtarea">Message:</td>
											<td><textarea></textarea></td>
										</tr> <tr>
											<td></td>
											<td><input type="submit" value="" className="btn"/></td>
										</tr>
									</tbody>
								</table>
							</form>
							<h2>Bhaccasyoniztas Beach Resort</h2>
							<p>
								<span>Address:</span> 123 Lorem Ipsum Cove, Sed Ut City, LI 12345
							</p>
							<p>
								<span>Telephone Number:</span> 1-800-999-9999
							</p>
							<p>
								<span>Fax Number:</span> 1-800-111-1111
							</p>
						</div>
					</div>
				</div>
			</div>
  )
}

export default ContactPage